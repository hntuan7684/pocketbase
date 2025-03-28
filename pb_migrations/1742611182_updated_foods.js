/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4080356935")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_354755247",
    "hidden": false,
    "id": "relation2178609939",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "restaurantId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4080356935")

  // remove field
  collection.fields.removeById("relation2178609939")

  return app.save(collection)
})
