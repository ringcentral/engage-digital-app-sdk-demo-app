# engage-digital-app-sdk-demo-app

Demo Engage Digital App SDK Application

## Step by step guide to use developer application (SDK)

In these steps will not need start a server.

1. Get an RingCentral Engage account, [request a demo](https://www.ringcentral.com/view_demo_cx.html).
2. Login to your RingCentral Engage admin console.
3. Create a email community in RingCentral Engage Digital -> "ADMIN" -> "CHANNELS" -> "Community profiles".
4. Create email channel in RingCentral Engage Digital -> "ADMIN" -> "Channels" -> "Channels", select the email community as related community, make sure it enabled and active. You only need input a email address in "POSTMARK SETTINGS" -> "Email address", leave other default, and take a note about the email address.
5. Go to RingCentral Engage Digital -> "ADMIN" -> "Agents", click the key icon, give your self read/reply/initiate discussion permission, but make sure do not check Approval required.
6. Go to RingCentral Engage Digital -> "ADMIN" -> "Dev tools" -> "developer application (SDK)", create a new app, set as developer mode, copy the code from [demo/simple.js](demo/simple.js), paste to source code textarea and save.
7. Go to RingCentral Engage Digital -> "ADMIN" -> "APPLICATIONS" -> "install apps", install the app created.
8. Go to RingCentral Engage Digital -> "ADMIN" -> Agents, click the search filter, set channel to your previous created email channel.
9. Now go to your email app, send a email to the email channel you set, with content: `My customer id is #1234, can you help`
10. Open browser console of Agents tab, refresh and click the `1234`, you will see the message in console.

We have a video to show all steps above: https://youtu.be/_NExqVn6Nro

Now you get a sense what the SDK app can do, do check our SDK methods document: https://engage-digital-api-docs.readthedocs.io/en/latest/app-sdk/methods/, a lot more methods.

## Setup a configuration page

Once you got the `Step by step guide` running well, you can continue to try the configuration page.

By running a server app, user can set a configuration page.

Follow this guide, you can start a custom configuration server:

```bash
# clone the project
git clone git@github.com:ringcentral/engage-digital-app-sdk-demo-app.git

# install dependencies
cd engage-digital-app-sdk-demo-app
npm i

# create .env, then edit .env, fill all fields required
cp .env.sample .env

# start dynamo db service
npm run dynamo

# start server
npm start

# start client
npm run c

# start proxy
npm run proxy
# will see
#Forwarding   http://xxxx.ngrok.io -> localhost:6066
```

- Then visit `http://xxxx.ngrok.io` to see the src code need to set as source code in your app
- Set `Configuration URL` to `http://xxxx.ngrok.io`
- Set `Callback URL` to `http://xxxx.ngrok.io/oauth`
- Go to installed apps list, click the Configuration icon to open the setting page, then you can input some message, after press submit button, message will be logged to developer console.

This is it, a simple demo, check the [API document](https://engage-digital-api-docs.readthedocs.io/en/latest/app-sdk/methods/), you can do much more with the API methods.
