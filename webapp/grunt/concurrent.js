module.exports = {
    server: [
        "compass:server"
    ],
    test: [
        "compass"
    ],
    dist: [
        "cssmin",
        "uglify",
        "imagemin"
    ]
};