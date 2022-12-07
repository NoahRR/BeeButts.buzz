//
// GENERATING THE BEE BUTTS WEEKLY NEWSLETTER
//

require('dotenv').config();

// GET NEWEST BEE BUTTS DATA FROM REDDIT
const fetch = require('node-fetch');
var bee_data = [];
added_counter = 0;

// get data from last week new "top"
fetch('https://www.reddit.com/r/beebutts/top/.json?limit=100&t=week')
  .then(response => response.json())
  .then(
      data => {

        data['data']['children'].forEach(element => {

            // organize data
            bee_post_data = {};
            bee_post_data['title'] = element['data']['title'];
            bee_post_data['sub_reddit'] = element['data']['subreddit_name_prefixed'];
            bee_post_data['image_url'] = element['data']['url_overridden_by_dest'];
            bee_post_data['author'] = element['data']['author'];
            bee_post_data['image_url_2'] = element['data']['url'];
            bee_post_data['post_url'] = 'https://www.reddit.com' + element['data']['permalink'];

            // ensure media link is image & from reddit
            if (bee_post_data['image_url'] && bee_post_data['image_url'] != '') {
              if ( bee_post_data['image_url'].slice(8)[0] == 'i' && bee_post_data['image_url'].slice(8)[1] == '.' && added_counter < 10 ) {
                bee_data.push(bee_post_data);
                added_counter++;
              }
            } else if (bee_post_data['image_url_2'] && bee_post_data['image_url_2'] != '') {
              if ( bee_post_data['image_url_2'].slice(8)[0] == 'i' && bee_post_data['image_url_2'].slice(8)[1] == '.' && added_counter < 10 ) {
                bee_data.push(bee_post_data);
                added_counter++;
              }
            }
        });

        // sometimes, the above query will not get enough pics.
        // because it's not the most popular sub_reddit
        // if so, we want to pull some extra pics from "hot"
        // https://www.reddit.com/r/beebutts/hot/.json?limit=50

        // we need to get more content
        if (added_counter < 10) {
          
          // get data from "hot"
          fetch('https://www.reddit.com/r/beebutts/hot/.json?limit=50')
          .then(response => response.json())
          .then(
              data => {

                data['data']['children'].forEach(element => {

                    // organize data
                    bee_post_data = {};
                    bee_post_data['title'] = element['data']['title'];
                    bee_post_data['sub_reddit'] = element['data']['subreddit_name_prefixed'];
                    bee_post_data['image_url'] = element['data']['url_overridden_by_dest'];
                    bee_post_data['author'] = element['data']['author'];
                    bee_post_data['image_url_2'] = element['data']['url'];
                    bee_post_data['post_url'] = 'https://www.reddit.com' + element['data']['permalink'];

                    // ensure media link is image & from reddit
                    if (bee_post_data['image_url'] && bee_post_data['image_url'] != '') {
                      if ( bee_post_data['image_url'].slice(8)[0] == 'i' && bee_post_data['image_url'].slice(8)[1] == '.' && added_counter < 10 ) {
                        bee_data.push(bee_post_data);
                        added_counter++;
                      }
                    } else if (bee_post_data['image_url_2'] && bee_post_data['image_url_2'] != '') {
                      if ( bee_post_data['image_url_2'].slice(8)[0] == 'i' && bee_post_data['image_url_2'].slice(8)[1] == '.' && added_counter < 10 ) {
                        bee_data.push(bee_post_data);
                        added_counter++;
                      }
                    }
                });

                // now that we have all the data we want, let's submit the newsletter
                submit_newsletter(bee_data);

          });

        // content is good and lets proceed
        } else {

            submit_newsletter(bee_data);

        }

        // THEY ARE ASYNCH FUNCTIONS SO THINGS HAPPENING HERE RUN BEFORE THE THEN FINISHES>... THATS WHY WERE NOT SEEING DATA HERE.. WE NEED TO PUT IT INSIDETHE BRACKETS

      });

function submit_newsletter(bee_data) {
  
          // INSERT NEW DATA INTO HTML TEMPLATE
          const mustache   = require('mustache');
          const fs = require('fs'); 
  
          var content = fs.readFileSync("newletter_template.html","utf-8");
          var data = {
            "bee_data": bee_data
          }
  
          // final data here
          var new_newsletter_html = mustache.render(content, data);
          var stringRegToReplace = new RegExp('&#x2F;', 'g');
          var new_newsletter_html = new_newsletter_html.replace(stringRegToReplace, '/');
  
          // write new content to test file to open and inspect
          fs.writeFile('weekly_newsletter_web.html', new_newsletter_html, function (err, data) {
              if (err) return console.log(err);
          });
  
          // end section
  
  
          // MAIL CHIMP CAMPAIGN CREATE, SET CONTENT, SEND
          const client = require('@mailchimp/mailchimp_marketing');
  
          client.setConfig({
            apiKey: process.env.MAILCHIMP_API_KEY,
            server: process.env.MAILCHIMP_SERVER,
          });
  
          var todayDate = new Date().toISOString().slice(0, 10);
  
          const run = async () => {
            const response = await client.campaigns.create(
              {
                type: "regular",
                recipients: {
                  list_id: process.env.MAILCHIMP_AUDIENCE_LIST_ID
                },
                tracking: {
                  opens: true
                },
                settings: {
                  title: todayDate + " Bee Butts Newsletter",
                  subject_line: "Your weekly good vibes have arrived!!",
                  preview_text: "Bzz Bzzt! Open me to view bee butts :D",
                  from_name: "The Bee Butts Group",
                  reply_to: "newsletter@beebutts.buzz"
                },
              }
            );
  
            new_campaign_id = response['id'];
  
            const response_set_content = await client.campaigns.setContent(new_campaign_id, {
              html: new_newsletter_html
            });
  
            const response_send = await client.campaigns.send(new_campaign_id);
  
          };
          // end section
  
          run();

}