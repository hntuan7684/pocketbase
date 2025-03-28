/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_749661959")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_749661959")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = \"\"",
    "deleteRule": "@request.auth.id = userId",
    "listRule": "@request.auth.id = userId",
    "updateRule": "@request.auth.id = userId"
  }, collection)

  return app.save(collection)
})
