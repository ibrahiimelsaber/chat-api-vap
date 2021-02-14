import { User } from '../../models/user.model';
import { ModelType } from 'typegoose';
export declare class AuthController {
    private readonly userModel;
    constructor(userModel: ModelType<User>);
    login(credentials: any): Promise<{
        token: any;
    }>;
    logout(user: any): Promise<{
        message: string;
    }>;
    signUp(signUpCredentials: any): Promise<{
        message: string;
    }>;
}
