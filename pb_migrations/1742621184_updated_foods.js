/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4080356935")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number3632866850",
    "max": null,
    "min": null,
    "name": "rating",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number1092193902",
    "max": null,
    "min": null,
    "name": "numRatings",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1174553048",
    "hidden": false,
    "id": "relation2620853105",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "categoryID",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4080356935")

  // remove field
  collection.fields.removeById("number3632866850")

  // remove field
  collection.fields.removeById("number1092193902")

  // update field
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
})
