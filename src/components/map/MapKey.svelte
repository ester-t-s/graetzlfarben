<!-- map legend -->

<script>
  import { lang, isMobile } from "$lib/stores.js";
  import { categories } from "$lib/settings.js";
  import NoDataPattern from "$components/NoDataPattern.svelte";
</script>

<!-- render pattern defs once -->
<NoDataPattern />

<div
  class="z-50 absolute pointer-events-auto mx-5"
  style={$isMobile ? "" : "max-width:calc(100% - 250px)"}
  class:relative={$isMobile}
  class:bottom-4={!$isMobile}
  class:my-8={$isMobile}
>
  <div class="flex flex-wrap gap-y-0 gap-6">
    {#each Object.entries(categories) as [key, { color, name, name_en }]}
      <div class="flex gap-1">
          <svg class="block w-4 h-4" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50%"
              cy="50%"
              r="40%"
              fill={key === "nodata" ? `url(#nodataPattern)` : color}
              stroke="white"
              stroke-width="2"
            />
          </svg>
        <span
          class="align-middle leading-4 mb-2"
          style="-webkit-text-stroke: 3px white; paint-order: stroke fill"
        >
          {$lang === "de" ? name : name_en}
        </span>
      </div>
    {/each}
  </div>
</div>
