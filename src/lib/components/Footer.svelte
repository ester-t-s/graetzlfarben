<script>
  import { lang, printBackUI } from "$lib/stores.js";
</script>

<div class=" text-sm text-gray-400 mt-10">
  <p>
    {$lang === "en"
      ? "Grätzlfarben was initially developed under the name 'Kiezcolors' by ODIS and CityLAB Berlin. The research unit cartography from TU Wien adapted it for Vienna. You can find the code to this project on "
      : "Grätzlfarben wurde ursprünglich unter dem Namen 'Kiezcolors' von ODIS und dem CityLAB Berlin entwickelt. Die Forschungsgruppe Kartographie der TU Wien hat das Projekt für Wien weiterentwickelt. Den Code zum Projekt findest auf "}
    <a
      class="underline"
      href="https://github.com/technologiestiftung/kiezcolors/"
    >
      GitHub
    </a>
    .
    <br /><br />

    <span class="text-sm font-thin text-gray-400">
      {$lang === "en" ? "Data sources:" : "Datenquellen:"}
      <br />
      Realnutzungskartierung 2022: <a
        class="underline"
        target="_blank"
        href="https://www.data.gv.at/katalog/de/dataset/stadt-wien_realnutzungskartierungab200708wien"
      >
        CC BY 4.0 Stadt Wien
      </a>
      <br />
      Straßenkarte: © <a
        class="underline"
        target="_blank"
        href="https://openstreetmap.org"
      >
      OpenStreetMap Contributors
      </a>
    </span>
  </p>
  <div class="w-full text-gray-400 mt-4">
    Impressum:
    <br>
    Dies ist ein Forschungsprototyp – Daten und Funktionalität ohne Gewähr! 
    Entwickelt am Forschungsbereich Kartographie<br>
    TU Wien, Wiedner Hauptstraße 8-10, 1040 Wien
    <input
      bind:checked={$printBackUI}
      type="checkbox"
      class="checkbox checkbox-primary checkbox-xs opacity-90 fixed bottom-0 left-0"
    />
  </div>
</div>
