<script>
  import { svg, dimensions, lang, printBackUI, isMobile } from "$lib/stores.js";
  import font from "$assets/scripts/font";
  import { encode } from "$assets/scripts/base64";
  import {downloadFilename, backsideSuffix} from "$lib/settings.js";

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

  const width = $dimensions[0];
  const height = $dimensions[1];

  function printSVG(base64EncodedSVG) {
    // Convert base64 to ArrayBuffer
    function base64ToArrayBuffer(base64) {
      const binaryString = atob(base64.split(",")[1]);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
    }

    // Convert the base64 data URL to a Blob
    const svgData = base64ToArrayBuffer(base64EncodedSVG);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });

    // Create a FileReader to read the Blob as a text
    const reader = new FileReader();
    reader.readAsText(blob);
    reader.onloadend = function () {
      // Create a temporary div element to hold the decoded SVG
      const tempDiv = document.createElement("div");
      tempDiv.style.display = "none";
      tempDiv.innerHTML = reader.result;
      document.body.appendChild(tempDiv);

      // Retrieve the SVG element from the temporary div
      const svgElement = tempDiv.querySelector("svg");

      // Create a new window to display the SVG for printing
      const printWindow = window.open("", "_blank");
      printWindow.document.write(
        '<!DOCTYPE html><html><head><title>Print SVG</title></head><body style="margin:0; padding:0; font-size:0;">'
      );
      printWindow.document.write("</body></html>");
      printWindow.document.close();

      // Append the SVG element to the new window
      printWindow.document.body.appendChild(svgElement);

      // Call the print function
      printWindow.print();

      // Close the new window after printing
      printWindow.close();

      // Remove the temporary div from the document
      document.body.removeChild(tempDiv);
    };
  }

  function downloadSVG(svg, suffix) {
    var b64;
    if (svg._groups) {
      const defs = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "defs"
      );
      const style = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "style"
      );
      style.type = "text/css";
      // prettier-ignore
      style.innerHTML = font('Outfit');
      defs.appendChild(style);
      svg.node().appendChild(defs);

      b64 = encode(svg.node().outerHTML);
      //b64 = encodeURIComponent('<?xml version="1.0" encoding="utf-8"?>' + svg.node().outerHTML);
    } else {
      b64 = encode(svg.outerHTML);
      //b64 = encodeURIComponent('<?xml version="1.0" encoding="utf-8"?>' + svg.outerHTML);
    }

    var file_path = "data:image/svg+xml;base64,\n" + b64;
    //var file_path = "data:image/svg+xml," + b64;

    if ($printBackUI) {
      var a = document.createElement("A");
      a.href = file_path;
      a.download = `${downloadFilename + (suffix || "")}.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    else {
      printSVG(file_path);
    }
  }

  // not in use
  function downloadPNG(svg) {
    //PNG Download
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const style = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "style"
    );
    style.type = "text/css";
    // prettier-ignore
    style.innerHTML = font('Outfit');
    defs.appendChild(style);
    svg.node().appendChild(defs);

    var s = new XMLSerializer().serializeToString(svg.node());
    var encodedData = window.btoa(s);

    var b64 = encode(svg.node().outerHTML);

    var image = new Image();
    image.src = "data:image/svg+xml;base64," + b64;
    image.onload = function () {
      var context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, width, height);
      var file_path = canvas.toDataURL("image/png");
      var a = document.createElement("A");
      a.href = file_path;
      a.download = `${downloadFilename}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  }

  function downloadSVGback() {
    const svgBack = document.getElementById("postcardBack");
    downloadSVG(svgBack, backsideSuffix);
  }
</script>

<button
  on:click={() => {
    downloadSVG($svg);
  }}
  class="btn btn-secondary mb-4"
  class:mt-4={!$isMobile}
  >{!$printBackUI ? appText.buttons.printFront : appText.buttons.downloadFront}</button
>

<br />

{#if $printBackUI}
  <button
    on:click={() => {
      downloadSVGback();
    }}
    class="btn btn-primary btn-outline mb-6"
    >
    {@html appText.buttons.downloadBack}</button
  >
{/if}
