import User from '../../models/user';
import { HttpStatus } from '../../../utils/http-status';

class UserController{
    constructor(){
        this.userModel=new User();
    }

    loginUser = ( req,res ) => {
        console.log("loginUser");
        console.log(req.body);
        const { userLogin,userPassword } = req.body;
        this.userModel.loginUser(userLogin,userPassword,(err,result) => {
            console.log(result);
            console.log("--------------");
            res.status(200).send(result);
        });
    };

    verifyUser = ( req,res )=> {
        const {authorization} = req.headers;
        console.log("verify user");
        const token=authorization.split(' ')[1];
        this.userModel.isAuth(token,null,(err,result) =>{
            if(err){
                res.status(HttpStatus.FORBIDDEN).send(result);
            }
            else
                res.send(result);
        });
    }

}

const userController=new UserController();

export default userController;