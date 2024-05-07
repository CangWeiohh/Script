let body = JSON.parse($response.body);
body = JSON.stringify({
  "id" : "de877622-e99c-4812-b8ca-4c8528f0a3d0",
  "disabledAnalyticsTracking" : false,
  "lastName" : "Cang",
  "unreadEvents" : 0,
  "firstName" : "Wei",
  "internal" : true,
  "createdAt" : "2024-05-07T02:08:26.5996500Z",
  "modifiedAt" : "2024-05-07T02:08:26.5996500Z",
  "accounts" : [

  ],
  "isJamTrialUsed" : false,
  "seenGettingStartedInJam" : false,
  "isEverywhereTrialUsed" : false,
  "email" : "cangweiohhi@gmail.com",
  "name" : "Wei Cang",
  "incomplete" : false
})
$done({ body });
