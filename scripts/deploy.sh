git config --replace-all remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
git fetch --tags
npx travis-deploy-once "npx semantic-release; bash scripts/webhook.sh"
