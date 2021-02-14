import { Message } from './message.model';
import { Room } from './room.model';
import { Ref, Typegoose } from 'typegoose';
import { ObjectID } from 'bson';
export declare class User extends Typegoose {
    _id: ObjectID | string;
    nickname: string;
    password: string;
    loggedIn: boolean;
    messages: Ref<Message>[];
    joinedRooms: Ref<Room>[];
}
