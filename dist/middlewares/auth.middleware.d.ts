import { NestMiddleware } from '@nestjs/common';
import { ModelType } from 'typegoose';
import { User } from '../models/user.model';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly userModel;
    constructor(userModel: ModelType<User>);
    use(req: any, res: any, next: any): void;
}
