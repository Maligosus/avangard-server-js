import connection from '../../../helpers/db'
import md5 from 'md5'
import jwt from 'jsonwebtoken'
import {HttpStatus} from '../../../utils/http-status'



/*
    err - сообщение об ошибке
    result - результат функции
    callback(err,result)
*/
const EmptyPassword="d41d8cd98f00b204e9800998ecf8427e";

class User{
    signature ="Era-secret-h6782h";
    constructor(){
    };
    loginUser =( user,password,callback ) =>{
        const hashPassword=md5(password);
        if (!user.length || hashPassword===EmptyPassword){
            callback(null,{
                status: HttpStatus.NO_CONTENT,
                connected:true,
                message : "Required login and password",
            })
            return;
        }
        connection.query(
            "Select Users.userPassword,Users.userLogin,Users.user_role_id,UserRoles.role_name,Users.userName,Users.userSurname from Users " +
            "inner join UserRoles ON Users.user_role_id = UserRoles.id where Users.userLogin = ?", user, (err,result) => {
                    if (err)
                        callback(err,null);               
                    else if (!result.length)
                        callback( null, {
                            status : HttpStatus.NOT_FOUND,
                            connected :true,
                            message : "UserNotFound"
                        } );                   
                    else if(hashPassword !=result[0].userPassword)
                        callback(null,{
                            status: HttpStatus.FORBIDDEN,
                            connected :true,
                            message : "IncorrectPassowrd"});                  
                    else
                        callback(null,{
                            status : HttpStatus.OK,
                            connected :true,
                            message : "SuccessAuthorization",
                            userLogin : result[0].userLogin,
                            userRoleId :result[0].user_role_id,
                            userRoleName :result[0].role_name,
                            accessToken :jwt.sign({
                                userLogin: result[0].userLogin,
                                userRoleId :result[0].user_role_id,
                                userRoleName : result[0].role_name,
                                userName: result[0].userName,
                                userSurname: result[0].userSurname,
                            },
                            this.signature,{
                                expiresIn:"24h"
                                //expiresIn:"0.1m" // for debug
                            }),
                        });               
            }
        );
    };
    isAuth = (token,result,callback) =>{
        console.log("VERIFY ACCESS TOKEN");
        jwt.verify(token,this.signature, (err,decode) =>{
            if (err)
                callback(err,{
                    status: HttpStatus.FORBIDDEN,
                    connected:true,
                    message: "TokenIsExpired",
                    expiredAt :err.expiredAt,
                });
            else
                callback(null,decode);         
        });
    };
    registerUser(userData){

    };
}

export default User;