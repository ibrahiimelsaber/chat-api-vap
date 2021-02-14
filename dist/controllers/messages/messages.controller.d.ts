import { Message } from '../../models/message.model';
import { ModelType } from 'typegoose';
export declare class MessagesController {
    private readonly model;
    constructor(model: ModelType<Message>);
    find(where: any): any;
}
