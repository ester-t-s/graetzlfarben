<script>
  import "maplibre-gl/dist/maplibre-gl.css";
  import maplibregl from "maplibre-gl";
  import { onMount } from "svelte";
  import mapStyle from "./mapStyle.js";
  import MapKey from "./MapKey.svelte";
  import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon";
  import { nearestPointOnLine } from "@turf/nearest-point-on-line";
  import { pointToPolygonDistance } from "@turf/point-to-polygon-distance";
  import { polygonToLine } from "@turf/polygon-to-line";
  import { point } from "@turf/helpers";
  import buffer from "@turf/buffer";

  import drawCanvasCircle from "$assets/scripts/drawCanvasCircle";
  import getLanduseSizes from "$assets/scripts/getLanduseSizes";
  import getCircleGeom from "$assets/scripts/getCircleGeom";
  import checkCircleFits from "$assets/scripts/checkCircleFits";
  import {
    landuses,
    mapBounds,
    initialMapCenter,
    mapMaxZoom,
    mapMinZoom,
    analysisRadiusInMeters,
  } from "$lib/settings.js";

  import {
    areaSizes,
    circleRadius,
    totalSize,
    mapCenter,
    mapCenterFormatted,
    showBasemap,
    locationText,
    useLocationAsText,
    textVis,
    newBounds,
    isMobile,
    lang
  } from "$lib/stores.js";

  import en from "$locales/en.json";
  import de from "$locales/de.json";
  let appText = {};
  $: {
    if ($lang === 'en') {
      appText = en;
    } else {
      appText = de;
    }
  }

  let map;

  function setShowBasemap(show) {
    if (!map) return;

    map.setLayoutProperty("osm", "visibility", !show ? "none" : "visible");
  }

  function setBounds(b) {
    if (!b || !map) return;
    map.setCenter(b);
  }

  function setScrollZoom(mobile) {
    if (!map) return;
    if (mobile) {
      map.scrollZoom.disable();
    } else {
      map.scrollZoom.enable();
    }
  }

  $: setShowBasemap($showBasemap);

  $: drawAndCount(map, $useLocationAsText);

  $: setBounds($newBounds);

  $: setScrollZoom($isMobile);

  $circleRadius = analysisRadiusInMeters;

  const drawAndCount = function (map) {
    if (!map || !map.getLayer("landuse")) return;

    const canvas = document.getElementById("myCanvas");

    let circleGeom = getCircleGeom(map, {
      radius: $circleRadius,
      steps: 16,
    });

    let circleFits = checkCircleFits(map, circleGeom);
    if (!circleFits) {
      const { width, height } = map.getContainer().getBoundingClientRect();
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const { sizes, sumSizes } = getLanduseSizes(map, circleGeom, landuses);
    $areaSizes = sizes;
    $totalSize = sumSizes;
    $locationText = "Lat " + $mapCenterFormatted.lat + " N, Lng " + $mapCenterFormatted.lng + " E";
    if ($useLocationAsText) {
      $textVis = $locationText;
    }
    drawCanvasCircle(map, canvas, $circleRadius);
  };

  onMount(async () => {

    map = new maplibregl.Map({
      container: "map", // container id
      style: mapStyle(window.location.origin + window.location.pathname),
      maxBounds: mapBounds,
      dragRotate: false,
      attributionControl: false,
      hash: true,
      minZoom: mapMinZoom,
      maxZoom: mapMaxZoom,
      center: initialMapCenter,
      zoom: 13,
    });

    map.on("load", function () {
      $mapCenter = map.getCenter().toArray();
      drawAndCount(map);

      map.on("moveend", function () {
        $mapCenter = map.getCenter().toArray();

        const renderedFeaturesAtMapCenter = map.queryRenderedFeatures(map.project($mapCenter), {
          layers: ["landuse"],
        });

        const renderedFeatures = map.queryRenderedFeatures({
          layers: ["landuse"],
        });

        const getEaseToPoint = (renderedFeatures) => {
          if (renderedFeatures.length === 0) return point(initialMapCenter);
          const nearestFeature = renderedFeatures.map((d) => ({d, distance: pointToPolygonDistance($mapCenter, d)})).toSorted((a, b) => a.distance - b.distance).at(0).d;
          const nearestFeatureAsLine = polygonToLine(nearestFeature);
          return nearestPointOnLine(nearestFeatureAsLine, $mapCenter);
        }

        // when map center is not on data
        if (renderedFeaturesAtMapCenter.length === 0) {

          const easeToPoint = getEaseToPoint(renderedFeatures);

          // create a buffer polygon around the nearest point and check whether
          // the current center lies inside that buffer
          const buf = buffer(easeToPoint, 1, { units: "meters" });
          const centerInBuffer = booleanPointInPolygon($mapCenter, buf);

          const [nx, ny] = easeToPoint.geometry.coordinates;
          if (!centerInBuffer) {
            map.easeTo({ duration: 500, center: [nx, ny] });
            return;
          }
        }

        const canvas = document.getElementById("myCanvas");
        drawCanvasCircle(map, canvas, $circleRadius);
        setTimeout(() => {
          drawAndCount(map);
        }, 100);
      });
    });
  });
</script>

<div id="map" class="w-full h-1/2 lg:h-screen !absolute left-0 z-0">
  <canvas id="myCanvas" class="absolute"></canvas>
</div>

<div class="relative w-full h-full pointer-events-none">
  {#if !$isMobile}
    <MapKey />
  {/if}
  <button
    class="btn btn-primary drop-shadow-xl text-2xl btn-circle absolute left-4 top-4 leading-7 z-40 pointer-events-auto"
    on:click={() => map.zoomIn()}
    on:keypress={() => map.zoomIn()}
    aria-label="Zoom in"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      class="bi bi-plus"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
      />
    </svg>
  </button>
  <button
    class="btn btn-primary drop-shadow-xl text-2xl btn-circle absolute left-4 top-10 mt-8 leading-7 z-40 pointer-events-auto"
    on:click={() => map.zoomOut()}
    on:keypress={() => map.zoomOut()}
    aria-label="Zoom out"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      class="bi bi-dash"
      viewBox="0 0 16 16"
    >
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
    </svg>
  </button>

  <div class="absolute right-2 bottom-8 z-50 text-md">
    {appText.map.radius}: {$circleRadius}m
  </div>
  <div
    class="absolute right-0 bottom-12 z-50 form-control w-fit pointer-events-auto"
  >
    <label class="cursor-pointer label">
      <span class="mx-2 text-md">{appText.map.basemap}</span>
      <input
        type="checkbox"
        bind:checked={$showBasemap}
        class="toggle toggle-primary"
      />
    </label>
  </div>
</div>

<style>
  #myCanvas {
    z-index: 10;
    pointer-events: none;
  }
</style>
