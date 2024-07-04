<script>
  import { lang, printBackUI } from "$lib/stores.js";
  import { browser } from "$app/environment"

  import en from "$locales/en.json";
  import de from "$locales/de.json";

  let printOverride = browser && new URLSearchParams(window.location.search).has("kiosk");
  $printBackUI = !printOverride;

  let appText = {};
  $: {
    if ($lang === 'en') {
      appText = en;
    } else {
      appText = de;
    }
  }

</script>

<div class=" text-sm text-gray-400 mt-4">
  <p>
    {@html appText.footer.background}
    <br><br>
    <span class="text-sm font-thin text-gray-400">
      {@html appText.footer.dataSources}
    </span>
  </p>
  <div class="w-full text-gray-400 mt-4">
    {@html appText.footer.imprint}
  </div>
</div>
