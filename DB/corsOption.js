//cross origin resourse sharing
const allowedOrigins = [
    'https://www.googlee.com',
    'http://localhost:3000',
    'http://localhost:3001',
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