module.exports = {
    phonegap: {
        options: {
            replacements: [
                {
                    pattern: /url\(/g,
                    replacement: 'url(..'
                }
            ]
        },
        files: {
            '<%= yeoman.phonegap %>/styles/': '<%= yeoman.phonegap %>/styles/*.css'
        }
    }
};