// GET NEWEST BEE BUTTS DATA FROM REDDIT
const fetch = require('node-fetch');

fetch('https://www.reddit.com/r/beebutts/top/.json?limit=10&t=week')
  .then(response => response.json())
  .then(
      data => {

        data['data']['children'].forEach(element => {
            // console.log(element['data'])
            console.log(element['data']['subreddit_name_prefixed'])
            console.log(element['data']['title'])
            console.log(element['data']['url_overridden_by_dest'])
            console.log(element['data']['author'])
            console.log(element['data']['url'])
            console.log('https:/www.reddit.com' + element['data']['permalink'])
            console.log('\n')
        });
        
      });

// INSERT NEW DATA INTO HTML TEMPLATE
// other option is to use mailchimp template - then we can define variables to pass in I believe.. in the docs https://mailchimp.com/developer/marketing/api/campaigns/ .. but prob just do this manually here - create enw file, from bee pro html export - then pass in variables with javascript, and then get the html, and input into api call.

// MAIL CHIMP CAMPAIGN CREATE, SET CONTENT, SEND
const client = require('@mailchimp/mailchimp_marketing');

client.setConfig({
  apiKey: "e5989eab8e9d539b6a5befeda73627d2-us6",
  server: "us6",
});

var todayDate = new Date().toISOString().slice(0, 10);

const run = async () => {
  const response = await client.campaigns.create(
    {
      type: "plaintext",
      recipients: {
        list_id: "619c7f73dc"
      },
      tracking: {
        opens: true
      },
      settings: {
        title: todayDate + " Bee Butts Newsletter",
        subject_line: "Your weekly good vibes have arrived!!",
        preview_text: "Bzz Bzzt! Open me to view bee butts :D",
        from_name: "The Bee Butts Group",
        reply_to: "noah@beebutts.buzz"
      },
    }
  );

  new_campaign_id = response['id'];

  const response_set_content = await client.campaigns.setContent(new_campaign_id, {
    plain_text: "this is the plain text of this email *|UNSUB|*"
  });

  const response_send = await client.campaigns.send(new_campaign_id);

};

run();