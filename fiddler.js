let body = JSON.parse($response.body);
body = JSON.stringify({
  "id" : "de877622-e99c-4812-b8ca-4c8528f0a3d0",
  "disabledAnalyticsTracking" : false,
  "lastName" : "Cang",
  "unreadEvents" : 0,
  "firstName" : "Wei",
  "internal" : true,
  "everywhereTrialMachineId" : "dc6543c8c22e78f4fd69d60339fb838af1fe1bffce9188d1131a8b8d013709ca",
  "createdAt" : "2024-04-16T02:24:14.0557920Z",
  "eventsLastRead" : "2024-04-16T03:04:02.3182520Z",
  "modifiedAt" : "2024-04-23T12:56:42.0056130Z",
  "accounts" : [
    {
      "ownerId" : "de877622-e99c-4812-b8ca-4c8528f0a3d0",
      "licensePlanName" : "trial",
      "modifiedAt" : "2024-04-27T07:49:26.7299670Z",
      "jamSessionsRoles" : "All",
      "status" : "active",
      "licenseAccountId" : "4d8d65b1-52a4-4b68-9f34-c4778dabf377",
      "licenseCreatedAt" : "2024-04-16T03:01:03.3500000Z",
      "licensePaymentSource" : "Telerik",
      "nextBillingCycleStart" : "2024-04-26T03:00:39.0770000Z",
      "licenseIsCancelled" : true,
      "createdAt" : "2024-04-16T03:00:38.8267230Z",
      "licenseCancelledOn" : "2024-04-16T03:01:03.3500000Z",
      "ruleSetsRoles" : "Create",
      "isOwner" : true,
      "name" : "cangweiohhi@gmail.com Everywhere account",
      "snapshotsRoles" : "Create",
      "id" : "aafdd9ba-cb96-43da-b5c3-2f2ab5886664",
      "ownerEmail" : "cangweiohhi@gmail.com",
      "licensePlanPeriod" : "trial",
      "composerCollectionsRoles" : "Create",
      "lastBillingCycleStart" : "2024-04-16T03:01:03.3500000Z",
      "licenseExpiresOn" : "2024-04-26T03:00:39.0770000Z",
      "product" : "Everywhere",
      "daysToExpiration" : -1,
      "isInactive" : false,
      "isSeat" : true,
      "quotas" : [
        {
          "type" : "Seats",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "SnapshotSharedWithUsers",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "ComposerRequestsSharedWithUsers",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "LocalAutoResponderRules",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "SharedSnapshots",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "BulkLicenseManagement",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "AllowSnapshotHistory",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "UserMachinesLimit",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "SharedComposerRequests",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "SupportSSO",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "SharedRuleSets",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "TotalAccountSize",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "LocalFilters",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "SnapshotSize",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "LocalSessionsStatisticsLimit",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "LocalSnapshots",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        },
        {
          "type" : "RuleSetSharedWithUsers",
          "max" : 53687091200,
          "manuallyAdjusted" : false
        }
      ],
      "filesRoles" : "Create"
    }
  ],
  "acceptedEverywhereEULAVersion" : "4.0.1",
  "seenGettingStartedInJam" : false,
  "isJamTrialUsed" : true,
  "isEverywhereTrialUsed" : true,
  "email" : "cangweiohhi@gmail.com",
  "name" : "Wei Cang",
  "incomplete" : false
})
$done({ body });
