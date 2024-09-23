import { ApiResposne, ClientError } from "./response";

export interface SignUp extends ClientError   {
    email: string, 
    password: string, 
    university: string
}

export interface SingUpResponse extends ApiResposne {
    email: string, 
    university: string
    username: string
}