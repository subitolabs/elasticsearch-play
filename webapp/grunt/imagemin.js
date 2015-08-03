module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: "<%= yeoman.app %>/images",
                src: "{,*/}*.{png,jpeg,gif}",
                dest: "<%= yeoman.dist %>/images"
            }
        ]
    }
};