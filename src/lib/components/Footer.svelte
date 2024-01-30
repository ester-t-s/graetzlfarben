<script>
  import { lang, printBackUI } from "$lib/stores.js";
</script>

<div class=" text-sm text-gray-400 mt-10">
  <p>
    {$lang === "en"
      ? "Grätzlfarben was initially developed under the name 'Kiezcolors' by ODIS and CityLAB Berlin. The research unit cartography from TU Wien adapted it for Vienna. You can find the code to this project on "
      : "Grätzlfarben wurde ursprünglich unter dem Namen 'Kiezcolors' von ODIS und dem CityLAB Berlin entwickelt. Die Forschungsgruppe Kartographie der TU Wien hat das Projekt für Wien weiterentwickelt. Den Code zum Projekt findest auf "}
    <a
      class="font-bold"
      href="https://github.com/technologiestiftung/kiezcolors/"
    >
      GitHub
    </a>
    .
    <br /><br />

    <span class="text-sm font-thin text-gray-400">
      {$lang === "en" ? "Data source:" : "Datenquelle:"}
      <br />
      <a
        class="underline"
        target="_blank"
        rel="noreferrer"
        href="https://www.data.gv.at/katalog/de/dataset/stadt-wien_realnutzungskartierungab200708wien"
      >
        Realnutzungskartierung ab 2007 Wien
      </a>
      |
      <a
        class="underline"
        target="_blank"
        rel="noreferrer"
        href="https://www.berlin.de/sen/sbw/">SenSBW</a
      >
      <!-- ,
      {$lang === "en" ? "published under:" : "veröffentlicht unter"} -->
      |
      <a
        class="underline"
        target="_blank"
        rel="noreferrer"
        href="https://creativecommons.org/licenses/by/4.0/deed.de"
      >
        CC BY 4.0 Deed
      </a>
    </span>
  </p>

  <div style="text-align:center" class="flex flex-wrap sm:flex-nowrap mt-8">
    <a class="basis-2/4" style="padding:10px" href="https://odis-berlin.de">
      <img width="200" alt="odis-logo" src="./img/logo-odis-berlin.svg" />
    </a>

    <a
      class="basis-2/4"
      style="padding:10px"
      href="https://kiezcolors.odis-berlin.de">
      <img
        width="200"
        alt="Kiezcolors logo"
        src="./img/kiezcolors-logo.png" 
      />
    </a>
  </div>

  <div class="w-full text-center text-gray-400 mt-4">
    <a href="https://cartolab.at/">Impressum</a>
    <input
      bind:checked={$printBackUI}
      type="checkbox"
      class="checkbox checkbox-primary checkbox-xs opacity-90 fixed bottom-0 left-0"
    />
  </div>
</div>
