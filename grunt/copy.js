module.exports = {
    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: "<%= yeoman.app %>",
                dest: "<%= yeoman.dist %>",
                src: [
                    "*.{ico,png,txt}",
                    "*.config",
                    "*.html",
                    "views/{,*/}*.html",
                    "images/{,*/}*.{webp}",
                    "fonts/*",
                    "sounds/*"
                ]
            },
            {
                expand: true,
                cwd: ".tmp/images",
                dest: "<%= yeoman.dist %>/images",
                src: [
                    "generated/*"
                ]
            }
        ]
    },
    phonegap: {
        files: [
            {
                expand: true,
                cwd: "<%= yeoman.tmp %>",
                dest: "<%= yeoman.phonegap %>",
                src: [
                    "scripts/*.js"
                ]
            },
            {
                expand: true,
                cwd: "<%= yeoman.app %>",
                dest: "<%= yeoman.phonegap %>",
                src: [
                    "fonts/*",
                    "sounds/*",
                    "views/{,*/}*.html",
                    "images/{,*/}*.*",
                ]
            }
        ]
    }
};