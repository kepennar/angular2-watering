const program = require('commander');

const packageJson = require('./package.json');
const search = require('./search');

program
  .version(packageJson.version)
  .command('search [query]', 'plant query')
  .action((env) => {
    search.byWildcard(env)
    .then((results) => console.log(results));
  });

program.parse(process.argv);
