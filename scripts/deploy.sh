git config --replace-all remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
git fetch --tags
npx semantic-release
