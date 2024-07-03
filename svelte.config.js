import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
    }),
    alias: {
      $components: "src/components",
      $locales: "src/locales",
      $assets: "src/assets"
    }
    // default options are shown

  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
