require("dotenv").config()
const express = require('express');
const app = express();
const cors = require("cors")

const corsOption = require("./DB/corsOption")
const mongoconnect = require("./DB/mongodb")

const { logger } = require('./Middleware/logEvents')
const errorHandler  = require('./Middleware/errorHandler')

const authRoute = require("./Routes/auth")
const userRoute = require("./Routes/user")
const customerRoute = require("./Routes/customerRoute")
const guestRoute = require("./Routes/GuestRoute")
const reportRoute = require("./Routes/BookingReRoute")
const dbRouter = require("./Routes/Employee.Routes");
const mpesa = require("./Routes/MpesaRoute")
const paypal = require("./Routes/PaypalRoute")


//conection to database
mongoconnect()
const db = require("./Models");
db.sequelize.sync();


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors(corsOption))
app.use(logger)



//routes
app.get("/", (req, res) => {
    res.json({Message:"Hotel Management System Backend Server."});
});
app.use("/api/auth", authRoute) //login route
app.use("/api/v1", dbRouter) //employee route
app.use("/api/v2", userRoute) //user route
app.use("/api/v3", customerRoute) //customer route
app.use("/api/v4", guestRoute) //guest route
app.use("/api/v5", reportRoute) //report route
app.use("/api/v6", mpesa) //mpesa payment route
app.use("/api/v7", paypal) //paypal payment route


//Error handler
app.use(errorHandler)


//server connection
const PORT = process.env.PORT
const server = app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`))


// Handled Promise Rejection
// process.on("unhandledRejection", (err) => {
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to Unhandled Promise Rejection`);

//     server.close(() => {
//         process.exit(1);
//     });
// });
