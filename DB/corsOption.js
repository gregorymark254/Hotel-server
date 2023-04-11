//cross origin resourse sharing
const allowedOrigins = [
    'https://de29-196-216-92-229.in.ngrok.io',
    'http://localhost:5000',
    'http://localhost:3000',
    'http://localhost:3002',
    'https://xainhotel.vercel.app',
    'https://adminhotel.vercel.app'
]

const corsOption = {
    origin: (origin, callback) => {
        if(allowedOrigins.indexOf(origin) !== -1  || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials:true,  
    optionSuccessStatus : 200
}

module.exports = corsOption