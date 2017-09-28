'use strict'

const ghPagesList = [
  'index.html',
  'favicon.ico',
  'public'
].join(' ')

module.exports = {
  'git-is-clean': {
    // `$(git status --porcelain)` will evaluate to the empty string if the
    // working directory is clean.
    // `test -z` will exit 0 (true) if its argument is an empty string.
    // If it doesn't exit true, `(git status && false)` will show why the
    // repository isn't clean and exit false causing the grunt tasks to end.
    command: 'test -z "$(git status --porcelain)"  || (git status && false)'
  },
  'git-push-master': {
    command: 'git push origin master'
  },
  'git-checkout-master': {
    command: 'git checkout master'
  },
  'deploy-prepare-1': {
    command: 'git branch -D gh-pages || echo "so not removed"'
  },
  'deploy-prepare-2': {
    command: 'git checkout --orphan gh-pages'
  },
  'deploy-prepare-3': {
    command:
      'git rm --cached \'*\''
  },
  'deploy-publish-1': {
    command: 'touch .nojekyll'
  },
  'deploy-publish-2': {
    command: `git add --force .nojekyll ${ghPagesList}`
  },
  'deploy-publish-3': {
    command: 'git commit -m "deploy task"'
  },
  'deploy-publish-4': {
    command: 'git push origin gh-pages --force'
  },
  'deploy-publish-5': {
    command: 'git clean -x -d --force --exclude=node_modules'
  },
  'deploy-publish-6': {
    command: 'git checkout master'
  }
}
