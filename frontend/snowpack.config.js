// snowpack.config.js
module.exports = {
    mount: {
        public: '/', // static files
        css: '/css', // custom CSS
        js: '/js', // custom scripting
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