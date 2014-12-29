module.exports = {
    js: {
        files: [
            "<%= yeoman.app %>/scripts/{,*/}*.js",
            "<%= yeoman.common %>/js/{,*/}*.js"
        ],
        tasks: [
            "concat:js_bizlunch",
            "concat:js_vendor"
        ]
    },
    compass: {
        files: [
            "<%= yeoman.app %>/styles/{,*/}*.scss"
        ],
        tasks: [
            "compass:server",
            "autoprefixer",
            "concat:css_bizlunch",
            "concat:css_vendor"
        ]
    },
    livereload: {
        options: {
            livereload: "<%= connect.options.livereload %>"
        },
        files: [
            "<%= yeoman.app %>/{,*/}*.html",
            "<%= yeoman.app %>/views/{,*/}*.html",
            ".tmp/styles/{,*/}*.css",
            ".tmp/scripts/*.js",
            "<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
        ]
    }
};