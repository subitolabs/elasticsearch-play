module.exports = {
    html: [
        "<%= yeoman.dist %>/index.html"
    ],
    css: [
        "<%= yeoman.dist %>/styles/{,*/}*.css"
    ],
    options: {
        assetsDirs: [
            "<%= yeoman.dist %>"
        ]
    }
};