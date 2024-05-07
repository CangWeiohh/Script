let body = JSON.parse($response.body);
body = JSON.stringify({
  "id" : "8050ffd5-9ff1-4e02-bea7-9226d4d0ec00",
  "disabledAnalyticsTracking" : false,
  "lastName" : "Cang",
  "unreadEvents" : 0,
  "firstName" : "Wei",
  "internal" : false,
  "createdAt" : "2024-05-07T02:08:26.5996500Z",
  "modifiedAt" : "2024-05-07T02:08:26.5996500Z",
  "accounts" : [

  ],
  "isJamTrialUsed" : false,
  "seenGettingStartedInJam" : false,
  "isEverywhereTrialUsed" : false,
  "email" : "cangweiohh@foxmail.com",
  "name" : "Wei Cang",
  "incomplete" : false
})
$done({ body });