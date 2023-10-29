const express = require('express')
const app = express()
const morgan = require('morgan') // Để check thông tin trên môi trường 
const {default: helmet} = require('helmet') //helmet để chặn 1 người dùng lấy thông tin
const Compression = require('compression') // Tối ưu băng thông
// init middlewares 
app.use(morgan("dev"))
app.use(helmet())
app.use(Compression())

// init db



// init router 
app.get('/', (req, res, next) =>{
    const strCompress = 'Hello fan'
    
    return res.status(200).json({
      message: 'Welcom fan'
      // metadata: strCompress.repeat(1000)
    })

})


//



module.exports = app