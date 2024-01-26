const express = require( 'express' )  ;

const app = express()  ;

const { connection } = require( './db' )  ;

const { userRouter } = require( './routes/userroutes' )  ;

app.use( express.json() )  ;

app.use( "/users" , userRouter )  ;


app.listen( 4500 , async()=>{

    console.log( 'server is running on http://localhost:4500' )  ;

    try {

        await connection  ;
        console.log( 'connected to mongoDB' )  ;

    } catch (error) {
        console.log( error )  ;   
    }

} )  ;