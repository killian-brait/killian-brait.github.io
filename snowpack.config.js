// snowpack.config.js
module.exports = {
    mount: {
        // The root directory serves as the public directory
        '.': '/',
    },
    plugins: [
        /* ... */
    ],
    routes: [
        /* ... */
    ],
    optimize: {
        /* Example: Uncomment to minify for production
        bundle: true,
        minify: true,
        treeshake: true,
        */
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
  };