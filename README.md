# Astro and Tailwind workflow Using PostCss

## Installation

### Step One

Would need to install postcss and autoprefixer separately
```
npx astro add tailwind
```
Or
```
npm install -D tailwindcss postcss autoprefixer
```

### Step Two

Create a postcss config file and add the following

```
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### Step Three Optional

To add support for nested declarations, we recommend our bundled tailwindcss/nesting plugin, which is a PostCSS plugin that wraps postcss-nested or postcss-nesting and acts as a compatibility layer to make sure your nesting plugin of choice properly understands Tailwind’s custom syntax like @apply and @screen.

It’s included directly in the tailwindcss package itself, so to use it all you need to do is add it to your PostCSS configuration, somewhere before Tailwind:

```
npm install -D postcss-nesting
```

### Step Four

One of the most useful features preprocessors offer is the ability to organize your CSS into multiple files and combine them at build time by processing @import statements in advance, instead of in the browser.

The canonical plugin for handling this with PostCSS is postcss-import.

```
npm install -D postcss-import
```

### Step Five

Create a folder src/styles/index.css and add the following:
Note: The separate css files are optional. Tailwind does recommend not mixing css and imports in the same file 
```
@import "tailwindcss/base";
@import "./custom-base-styles.css";

@import "tailwindcss/components";
@import "./custom-components.css";

@import "tailwindcss/utilities";
@import "./custom-utilities.css"
```
