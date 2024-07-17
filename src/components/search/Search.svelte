<script>
  // https://github.com/rob-balfre/svelte-select/tree/feature/v5
  import Select from "svelte-select";

  import loadOptions from "./requestAddress.js";
  import { newBounds, lang } from "$lib/stores.js";

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

  let selectedSearchResult;

  function handleSelect(event) {
    const placeCoordinates = [event.detail.lon, event.detail.lat];
    $newBounds = placeCoordinates;

    selectedSearchResult = JSON.parse(JSON.stringify(event.detail));
  }

  function handelClear() {
    selectedSearchResult = null;
  }
</script>

<div class="mb-5 pt-5">
  <Select
    {loadOptions}
    hideEmptyState={true}
    loadOptionsInterval={1500}
    placeholder={appText.inputs.search}
    on:select={handleSelect}
    on:clear={handelClear}
    label="display_name"
    value={selectedSearchResult}
  >
    <!--<div slot="empty" class="empty">{appText.inputs.noSearchResults}</div>-->
  </Select>
</div>
