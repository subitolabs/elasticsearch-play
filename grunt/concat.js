module.exports = {
    js_bizlunch: {
        src: [
            "<%= yeoman.app %>/scripts/app.js",
            "<%= yeoman.app %>/scripts/filters/*.js",
            "<%= yeoman.app %>/scripts/directives/*.js",
            "<%= yeoman.app %>/scripts/services/*.js",
            "<%= yeoman.app %>/scripts/controllers/*.js",
        ],
        dest: "<%= yeoman.tmp %>/scripts/bizlunch.js"
    },
    js_vendor: {
        src: [
            "<%= yeoman.vendor %>/ng-file-upload/angular-file-upload-shim.js",
            "<%= yeoman.vendor %>/angular/angular.js",
            "<%= yeoman.vendor %>/angular-route/angular-route.js",
            "<%= yeoman.vendor %>/angular-resource/angular-resource.js",
            "<%= yeoman.vendor %>/angular-sanitize/angular-sanitize.js",
            "<%= yeoman.vendor %>/ng-file-upload/angular-file-upload.js",
            "<%= yeoman.vendor %>/angular-socket-io/socket.js",
            "<%= yeoman.vendor %>/moment/moment.js",
            "<%= yeoman.vendor %>/angular-loading-bar/build/loading-bar.js",
            "<%= yeoman.app %>/scripts/vendor/*"
        ],
        dest: "<%= yeoman.tmp %>/scripts/vendor.js"
    },
    css_bizlunch: {
        src: "<%= yeoman.tmp %>/styles/bizlunch/*.css",
        dest: "<%= yeoman.tmp %>/styles/bizlunch.css"
    },
    css_vendor: {
        src: [
            "<%= yeoman.tmp %>/styles/vendor/*.css"
        ],
        dest: "<%= yeoman.tmp %>/styles/vendor.css"
    }
};