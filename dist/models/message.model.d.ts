import { Ref, Typegoose } from 'typegoose';
import { User } from './user.model';
import { Room } from './room.model';
import { ObjectID } from 'bson';
export declare class Message extends Typegoose {
    _id: ObjectID | string;
    text: string;
    created: Date;
    owner: User | string | any;
    room: Ref<Room> | string;
}
