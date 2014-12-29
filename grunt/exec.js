module.exports = {
    git_push: "git add . --all && git commit -am \"Work work\" && git push",
    deploy: 'rsync -az --exclude=".DS_Store" -e "ssh -p 666" ./dist/ root@91.121.26.12:/home/bizlunch/app/webapp/',
    run_phonegap_android: 'cd <%= yeoman.phonegap %>  && phonegap run android',
    slack: 'curl -X POST --data-urlencode \'payload={"channel": "#webapp", "username": "BizlunchBot", "text": "Une nouvelle version de la webapp est en ligne !"}\' https://hooks.slack.com/services/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'
};