module.exports = {
    options: {
        sourceMap: true,
        mangle: true,
        preserveComments: false,
        compress: true,
        beautify: false
    },
    dist: {
        expand: true,
        cwd: "<%= yeoman.tmp %>/scripts",
        src: "*.js",
        dest: "<%= yeoman.dist %>/scripts"
    }
};