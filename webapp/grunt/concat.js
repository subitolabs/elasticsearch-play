module.exports = {
    js_me: {
        src: [
            "<%= yeoman.app %>/scripts/app.js",
            "<%= yeoman.app %>/scripts/controllers/*.js"
        ],
        dest: "<%= yeoman.tmp %>/scripts/testr.js"
    },
    js_vendor: {
        src: [
            "<%= yeoman.vendor %>/angular/angular.js",
            "<%= yeoman.vendor %>/angular-route/angular-route.js",
            "<%= yeoman.vendor %>/angular-resource/angular-resource.js",
            "<%= yeoman.vendor %>/angular-sanitize/angular-sanitize.js",
            "<%= yeoman.vendor %>/ace-builds/src-noconflict/ace.js",
            "<%= yeoman.vendor %>/ace-builds/src-noconflict/ext-textarea.js",
            "<%= yeoman.vendor %>/ace-builds/src-noconflict/theme-github.js",
            "<%= yeoman.vendor %>/angular-ui-ace/ui-ace.js",
            "<%= yeoman.vendor %>/moment/moment.js",
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
            "<%= yeoman.tmp %>/styles/vendor/*.css"
        ],
        dest: "<%= yeoman.tmp %>/styles/vendor.css"
    }
};