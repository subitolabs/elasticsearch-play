module.exports = {
    options: {
        sourceMap: false,
        mangle: true,
        banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today(\"yyyy-mm-dd\") %> */"
    },
    dist: {
        expand: true,
        cwd: "<%= yeoman.tmp %>/scripts",
        src: "*.js",
        dest: "<%= yeoman.dist %>/scripts"
    }
};