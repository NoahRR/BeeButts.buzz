const fetch = require('node-fetch');

fetch('https://www.reddit.com/r/beebutts/top/.json?limit=6')
  .then(response => response.json())
  .then(
      data => {

        data['data']['children'].forEach(element => {
            console.log(element['data']['subreddit_name_prefixed'])
            console.log(element['data']['title'])
            console.log(element['data']['url_overridden_by_dest'])
            console.log(element['data']['author'])
            console.log(element['data']['url'])
            console.log('https:/www.reddit.com' + element['data']['permalink'])
            console.log('\n')
        });
        
      }
  );