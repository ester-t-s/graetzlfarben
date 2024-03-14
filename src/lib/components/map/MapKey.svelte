<!-- map legend -->

<script>
  import { dimensions, lang, isMobile } from "$lib/stores.js";
  import {categories} from "../../settings.js";
</script>

<div
  class="z-50 absolute pointer-events-auto inline-block mx-2"
  style={$isMobile ? "" : "max-width:calc(100% - 250px)"}
  class:relative={$isMobile}
  class:bottom-4={!$isMobile}
  class:my-8={$isMobile}
>
  {#each Object.values(categories) as { color, name, name_en }, i}
    <div class="inline-block align-middle">
      <div
        class="w-4 h-4 rounded-full ml-2 inline-block"
        style={`background-color:${color}; border: 1.5px solid white;`}
      />
      <p class="align-middle leading-4 ml-1 inline-block mb-2" style="text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
      1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;;">
        {$lang === "de" ? name : name_en}
      </p>
    </div>
  {/each}
</div>
