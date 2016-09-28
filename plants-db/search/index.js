const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

module.exports = function byWildcard(term) {
  return client.search({
    index: 'plants',
    body: {
      'query': {
        'wildcard': {
          'commonName': '*' + env + '*'
        }
      }
    }
  })
  .then((resp) => resp.hits.hits._source);
};

