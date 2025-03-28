/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4080356935")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1174553048",
    "hidden": false,
    "id": "relation2620853105",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "categoryId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4080356935")

  // remove field
  collection.fields.removeById("relation2620853105")

  return app.save(collection)
})
