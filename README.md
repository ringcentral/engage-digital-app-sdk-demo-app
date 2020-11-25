# engage-digital-app-sdk-demo-app

Demo Engage Digital App SDK Application

## Step by step guide to use developer application (SDK)

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

Now you get a sense what the SDK app can do, do check our SDK methods document: https://engage-digital-api-docs.readthedocs.io/en/latest/app-sdk/methods/, a lot more methods.