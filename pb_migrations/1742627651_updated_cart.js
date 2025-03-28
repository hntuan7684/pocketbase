/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_749661959")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id = userId"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_749661959")

  // update collection data
  unmarshal({
    "listRule": "@collection.cart.userId = @collection.users.id"
  }, collection)

  return app.save(collection)
})
