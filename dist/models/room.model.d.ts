import { Message } from './message.model';
import { User } from './user.model';
import { Ref, Typegoose } from 'typegoose';
import { ObjectID } from 'bson';
export declare class Room extends Typegoose {
    _id: ObjectID | string;
    name: string;
    messages: Ref<Message[]>;
    connectedUsers: Ref<User[]>;
}
