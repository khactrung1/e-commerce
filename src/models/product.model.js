const {model , Schema , types} = require('mongoose');


const DOCUMENT_NAME = 'Product'
const COLLECTION_NAME = 'Products'

const ProductSchema = new Schema ({
  product_name: {type: String , required: true},
  product_thumb: {type: String , required: true},
  product_description: {type: String , required: true},
  product_price: {type: String , required: true},
  product_quantity: {type: String , required: true},
  product_type: {type: String , required: true , enum: ['Coffee' , 'Cake']},
  product_attributes: {type: Schema.Types.Mixed , required: true}
},{
  collection: COLLECTION_NAME,
  timestamps: true
})

const DrinkSchema = newSchema ({  
  size : string,
  more : string,
},{
  collection: Drink ,
  timestamps: true
})
const CakeSchema = newSchema ({  
  size : string,
},{
  collection: Cake ,
  timestamps: true
})


module.exports = {
  Product: model (DOCUMENT_NAME, productSchema),
  Drink: model ('Drink',DrinkSchema ) ,
  Cake: model ( 'Cake', CakeSchema)  
}