module.exports = {
    js_me: {
        src: [
            "<%= yeoman.app %>/scripts/data/*.js",
            "<%= yeoman.app %>/scripts/app.js",
            "<%= yeoman.app %>/scripts/controllers/*.js",
            "<%= yeoman.app %>/scripts/directives/*.js"
        ],
        dest: "<%= yeoman.tmp %>/scripts/testr.js"
    },
    js_vendor: {
        src: [
            "<%= yeoman.vendor %>/angular/angular.js",
            "<%= yeoman.vendor %>/angular-sanitize/angular-sanitize.js",
            "<%= yeoman.vendor %>/angular-route/angular-route.js",
            "<%= yeoman.vendor %>/ace-builds/src-noconflict/ace.js",
            "<%= yeoman.vendor %>/ace-builds/src-noconflict/ext-language_tools.js",
            "<%= yeoman.vendor %>/ace-builds/src-noconflict/ext-textarea.js",
            "<%= yeoman.vendor %>/raf/index.js",
            "<%= yeoman.vendor %>/angular-ui-layout/src/ui-layout.js",
            "<%= yeoman.app %>/scripts/ace/*"
        ],
        dest: "<%= yeoman.tmp %>/scripts/vendor.js"
    },
    css_me: {
        src: "<%= yeoman.tmp %>/styles/testr/*.css",
        dest: "<%= yeoman.tmp %>/styles/testr.css"
    },
    css_vendor: {
        src: [
            "<%= yeoman.tmp %>/styles/vendor/*.css",
            "<%= yeoman.vendor %>/angular-ui-layout/src/ui-layout.css",
        ],
        dest: "<%= yeoman.tmp %>/styles/vendor.css"
    }
};