module.exports = {
    options: {
        port: 8000,
        hostname: "localhost",
        livereload: 35729
    },
    livereload: {
        options: {
            open: true,
            middleware: function (connect) {
                return [
                    connect.static('.tmp'),
                    connect().use( '/bower_components', connect.static('./bower_components')),
                    connect.static('./app'),
                    connect.static('./bower_components')
                ];
            }
        }
    },
    test: {
        options: {
            port: 9001
        }
    },
    dist: {
        options: {
            open: true,
            base: "<%= yeoman.dist %>"
        }
    }
};