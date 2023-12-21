![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Grätzlfarben, aka Kiezcolors

*Grätzlfarben* is a map based tool that creates a postcard showing the landuse distribution in your neighborhood in Vienna. It is based on the Kiezcolors Tool of the Open Data Informationsstelle Berlin. By zooming in and out you can pick a location and position it inside the circle. *Grätzlfarben* then maps the individual areas onto a tree map diagram. You can print the resulting motive as a postcard and share it!

![kiezcolors_overview](https://github.com/technologiestiftung/kiezcolors/assets/46717848/fc4b20c6-4485-4a53-aafd-19c2ce5633e0)


## Tech stack

This website is a [svelte](https://svelte.dev/) app.

## Developing

Install dependencies by running:

```bash
npm install
```

Start a development server by running:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Data

For Vienna, the 'Realnutzungskartierung' dataset by the City of Vienna is suitable for the application and [available as a WFS](https://www.data.gv.at/katalog/dataset/2f5baa1f-208c-42c2-8d04-9ea74aa1b229#resources). QGIS can be used to project it to ```EPSG:4326``` and save it as ```GeoJSON```, which is required to create the vector tiles for the map.

To refine the categories, for Vienna NUTZUNG_LEVEL3 could be used, but the naming has to be pre-processed because the category names include spaces and commas.
  
## Tile Creation

The tiles were created with *tippecanoe*. To [use tippecanoe on Windows, you need to install Ubuntu](https://gist.github.com/ryanbaumann/e5c7d76f6eeb8598e66c5785b677726e)

To then use tippecanoe, open the Ubuntu shell, change directory to c/ by `cd ../../mnt/c`, change directory to tippecanoe folder and `sudo make install`, enter sudo password. 

After changing to the directory where the input file is located, you can make the tiles by running the following command:

```bash
tippecanoe --output-to-directory ./tiles --layer "landuse-data" --no-tile-compression --force --minimum-zoom=10 --maximum-zoom=13 ./{input-file}.geojson
```

Your input data has to be in ```GeoJSON``` format and in the ```EPSG:4326``` projection. 

## Licence

The landuse data *Realnutzungskartierung Wien 2020* can be downloaded from the [Open Data Portal Austria](https://www.data.gv.at) and is licenced under CC BY 4.0 DEED.


## Adapting to your city
All variables to be adapted can be found in `src/lib/settings.js`

## Contributing

Before you create a pull request, write an issue so we can discuss your changes.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Content Licensing

Texts and content available as [CC BY](https://creativecommons.org/licenses/by/3.0/de/).

## Credits

<table>
  <tr>
        <td>
      Made by <a href="https://odis-berlin.de">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-odis-berlin.svg" />
      </a>
    </td>
    <td>
      In cooperation with <a href="https://citylab-berlin.org/de/start/">
        <br />
        <br />
        <img width="200" src="https://citylab-berlin.org/wp-content/uploads/2021/05/citylab-logo.svg" />
      </a>
    </td>
    <td>
      A project by <a href="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://citylab-berlin.org/wp-content/uploads/2021/05/tsb.svg" />
      </a>
    </td>
    <td>
      Supported by <a href="https://www.berlin.de/rbmskzl/">
        <br />
        <br />
        <img width="80" src="https://citylab-berlin.org/wp-content/uploads/2021/12/B_RBmin_Skzl_Logo_DE_V_PT_RGB-300x200.png" />
      </a>
    </td>
  </tr>
</table>

## Related Projects
