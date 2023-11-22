# How to Mass Send Emails
with SendGrid's Email API and Node.js!

### Email API
Once you create a Sendgrid account or login, click on the Email API tab on the navigation bar on the left. This will open up two options: Dynamic Templates and Integration Guide.
Click on Integration Guide and choose the Web API as your setup method.
Choose a language you are comfortable with. I found tutorials with Node.js so that is what I went with. After choosing a language, Sendgrid gives you easy and simple documentation on how to use their API. I will copy its steps below for your convenience.

### Make sure you have Node.js prerequisites
Sendgrid's library requires Node.js version 0.10, 0.12, or 4.

### Create an API Key
Click on the blue button after you name your API key in step 2. This will generate your key and update the code block in step 3.

### Create an Environment Variable
Copy the code block from step 3 and run it in your shell. 

`echo "export SENDGRID_API_KEY='your-key-here'" > sendgrid.env`
`echo "sendgrid.env" >> .gitignore`
`source ./sendgrid.env`

Each time you want to run your JS script on a fresh shell, you need to run `source ./sendgrid.env` first to activate your API key. Thus, store your API key 
somewhere safe and/or encrypt it!

### Install the npm package
Npm comes installed with Node.js since node version 0.8.x, therefore you likely already have it.

`npm install --save @sendgrid/mail`

### Send your first email
Sendgrid gives you the minimum code needed to send a single email. But if you want to use a CSV for a mass email and/or send a PDF, take a look at my index.js! 

