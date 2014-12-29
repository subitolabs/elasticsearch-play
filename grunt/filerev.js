module.exports = {
    options: {
        hash: '<%= yeoman.release %>',
        length: 32
    },
    dist: {
        src: [
            "<%= yeoman.dist %>/scripts/{,*/}*.js",
            "<%= yeoman.dist %>/styles/{,*/}*.css"
        ]
    }
};