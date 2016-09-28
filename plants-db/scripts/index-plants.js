const chunk = require('lodash/chunk');
const flatMap = require('lodash/flatMap');
const elasticsearch = require('elasticsearch');
const data = require('./datas/plants.json');
const index = require('./datas/plant.index.json');

const dataChunks = chunk(data, 100);

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

function generateChunk(datas) {
  return flatMap(datas, d => {
    return [{index:  {_index: 'plants', _type: 'mytype'}}, d];
  });
}

client.indices.exists({index: 'plants'})
  .then(exists => {
    if (!exists) {
      return client.indices.create({index: 'plants'})
        .then(() => client.indices.putMapping({index: 'plants', type: 'plant', body: index}));
    }
    return true;
  }).then(() => {
    const nbChunks = dataChunks.length;
    let i = 0;

    const addChunk = (datas) => {
      client.bulk({
        body: generateChunk(datas)
      })
      .then(() => {
        if (i < nbChunks) {
          i++;
          addChunk(dataChunks[i]);
        }
      });
    };
    addChunk(dataChunks[i]);
  });
