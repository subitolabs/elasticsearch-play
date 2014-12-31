module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: ".tmp/scripts",
                src: "*.js",
                dest: ".tmp/scripts"
            }
        ]
    }
};