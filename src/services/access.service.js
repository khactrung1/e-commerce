const shopModel = require("../models/shop.model")
const bcrypt = require('bcrypt')
const bcrypt = require('bcrypt')
const Roleshop ={
  SHOP: 'SHOP',
  WRITER: 'WRITER',
  EDITTOR: 'EDITTOR',
  ADMIN : ' ADMIN',
}

class AccessService {
    static signUp = async({name , email , password}) =>{
      try {
        //step1 : check email exists

        const hodelShop = await shopModel.findOne({email}).lean()
        if(holderShop){
          return{
            code: 'XXX',
            message: 'Shop already registered !'
          }
        }
        const passwordHash = await bcrypt.hash(password, 10)
        const newShop = await shopModel.create({
            name , email , passwordHash , roles:[Roleshop.SHOP]
        })

        if(newShop){
          // created PrivateKey , Publickey
          const {} = crypto
        }

      } catch (error) {
          return{
             code:'XXX',
             message:error.message,
             status:'error'
          }
      }
    }
}
module.exports = AccessService