module.exports = {
    git_push: "git add . --all && git commit -am \"Work work\" && git push",
    deploy: 'rsync -az --exclude=".DS_Store" -e "ssh -p 666" ./dist/ root@91.121.26.12:/home/bizlunch/app/webapp/'
};