module.exports = {
    git_push: "git add . --all && git commit -am \"Work work\" && git push",
    sync_webapp: 'rsync -az --exclude=".DS_Store" -e "ssh -p 666" ./dist/ root@188.165.251.36:/home/testr/app/webapp/',
    sync_api: 'rsync -az --exclude=".DS_Store" -e "ssh -p 666" ../api/ root@188.165.251.36:/home/testr/app/api/'
};