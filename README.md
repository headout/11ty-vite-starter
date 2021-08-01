# 11ty Vite Starter

This is a starter project for smaller websites, like a personal blog or landing pages. It uses [11ty](https://www.11ty.dev/) for Static Site Generation and [Vite](https://vitejs.dev/) for building Javascript and SASS/SCSS.

### Notes before you build:

1. The `assets` folder has a passthrough. Anything you add to it will be copied directly to the public site.
2. `_data` has seo.json, make sure you tweak this to reflect your site and links.
3. You can write your Javascript in `scripts` and SASS/SCSS in `styles`.
4. Entry points to these must be `main.js` and `main.css` respectively, you can change these defaults in the `default.html` within `_includes`. The rest of the folder structure is up to you.
5. The `.eleventy.js` config file is well commented and explains exactly how this integration works. It's not perfect and still WIP.
6. Feedback and suggestions on how to improve this are always welcome.

### How to build

1. Clone this repo
2. `yarn` to install all dependencies
3. `yarn dev` to start a dev server
4. `yarn build` to build the site into `_site` directory
5. `yarn prod` will build the site and also serve it up

Note: some commands are hardcoded with yarn, so using npm will not work. I will fix this in a future version.
