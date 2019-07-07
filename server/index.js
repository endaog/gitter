const express = require('express');
const rp = require('request-promise-native');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());

const twitterKey = process.env.TWITTER_API_KEY;

app.get('/api/github', (req, res) => {
  const name = req.query.name || '';
  
  var options = {
    uri: 'https://api.github.com/search/repositories?',
    qs: {
      q: name + ' in:name in:descrption',
      sort: 'name',
      order: 'desc' 
    },
    headers: {
        'User-Agent': 'Request-Promise',
    },
    json: true
  };
  
  rp(options)
    .then((repos) => {
        res.setHeader('Content-Type', 'application/json');
        const results = repos.items.map( (item) => {
          return {
            id: item.id,
            name: item.name,
            description: item.description
          }
        });
        res.send(results);
    })
    .catch((err) => {
        // API call failed...
        console.log('failed', err);
        res.status(err.statusCode)
           .json({success: false, message: err.error.message});
    });
});

app.get('/api/tweets', (req, res) => {
  const name = req.query.name || '';
  console.log(name);
  var options = {
    uri: 'https://api.twitter.com/1.1/search/tweets.json',
    qs: {
      q: name,
      result_type: 'popular',
    },
    headers: {
        'Authorization': `Bearer ${twitterKey}`,
    },
    json: true
  };
  
  rp(options)
    .then((tweets) => {
        res.setHeader('Content-Type', 'application/json');
        const results = tweets.statuses.map( (item) => {
          return {
            id: item.id,
            tweet: item.text,
          }
        });
        res.send(results);
    })
    .catch((err) => {
        // API call failed...
        console.log('failed', err);
    });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
