let body = JSON.parse($response.body);
body = JSON.stringify({
  "sharedRuleSets" : {
    "value" : 0,
    "allowed" : 53687091200
  },
  "localSnapshots" : {
    "allowed" : 53687091200
  },
  "sharedSnapshots" : {
    "value" : 0,
    "allowed" : 53687091200
  },
  "snapshotSize" : {
    "allowed" : 53687091200
  },
  "ruleSetSharedWithUsers" : {
    "allowed" : 53687091200
  },
  "localSessionsStatisticsLimit" : {
    "allowed" : 53687091200
  },
  "userId" : "de877622-e99c-4812-b8ca-4c8528f0a3d0",
  "accountId" : "aafdd9ba-cb96-43da-b5c3-2f2ab5886664",
  "sharedComposerRequests" : {
    "value" : 0,
    "allowed" : 53687091200
  },
  "composerRequestsSharedWithUsers" : {
    "allowed" : 53687091200
  },
  "snapshotSharedWithUsers" : {
    "allowed" : 53687091200
  },
  "localFilters" : {
    "allowed" : 53687091200
  },
  "localAutoResponderRules" : {
    "allowed" : 53687091200
  },
  "totalAccountSize" : {
    "value" : 0,
    "allowed" : 53687091200
  }
})
$done({ body });