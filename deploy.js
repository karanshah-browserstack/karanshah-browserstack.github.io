const ghPages = require('gh-pages');

ghPages.publish(
  'dist',
  {
    user: {
      name: 'karanshah-browserstack',
      email: 'karan.s@browserstack.com',
    },
    dotfiles: true,
    repo: 'git@github.com:karanshah-browserstack/karanshah-browserstack.github.io.git',
    message: `Deployed master at ${Date.now()}`
  },
  function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  },
);
