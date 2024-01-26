const express = require( 'express' )  ;

const userRouter = express.Router()  ;

const { UserModel } = require( '../models/usermodel' )  ;
 
userRouter.get( '/get', async (req,res)=>{
    
    try 
    {      
        const users = await UserModel.find( req.query )  ;

        // const users = await UserModel.find( { age: {$gte:req.query.age} } )  ;

        res.send( users )  ;

    } catch (error) 
    {
        res.send( { "err" : error } ) ;
    }
})  ;

userRouter.post( '/add', async (req,res)=>{

    try 
    {
        const user = new UserModel( req.body )  ;

        await user.save()  ;

        res.send( { "msg" :"new user added"} ) ;

    } catch (error) 
    {
        res.send( { "err" : error } ) ;
    }

})  ;  


userRouter.patch( '/update/:userid', async (req,res)=>{

    try 
    {
        const userId = req.params.userid  ; 

        await UserModel.findByIdAndUpdate( userId , req.body )  ;

        res.send( { "msg" : "User is updated" } )  ;

    } catch (error) 
    {
        res.send( { "err" : error } ) ;
    }

})  ;  

userRouter.delete( '/delete/:userid', async (req,res)=>{

    try 
    {
        const userId = req.params.userid  ; 

        await UserModel.findByIdAndDelete( userId )  ;

        res.send( { "msg" : "User is deleted" } )  ;

    } catch (error) 
    {
        console.log( error )  ;

        res.send( { "err" : error} )  ;
    }

})  ;  

module.exports = { userRouter } ;