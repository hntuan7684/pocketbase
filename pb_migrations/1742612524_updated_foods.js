/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4080356935")

  // remove field
  collection.fields.removeById("relation1913981822")

  // remove field
  collection.fields.removeById("relation3632866850")

  // remove field
  collection.fields.removeById("relation1092193902")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4080356935")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_354755247",
    "hidden": false,
    "id": "relation1913981822",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "restaurantName",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_354755247",
    "hidden": false,
    "id": "relation3632866850",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "rating",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_354755247",
    "hidden": false,
    "id": "relation1092193902",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "numRatings",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
