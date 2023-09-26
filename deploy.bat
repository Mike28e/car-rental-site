
# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

echo 'www.mikelias.com' > CNAME

git init
git add -A
git commit -m 'deploy'

cd -