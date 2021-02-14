import { Room } from '../../models/room.model';
import { ModelType } from 'typegoose';
export declare class RoomsController {
    private readonly model;
    constructor(model: ModelType<Room>);
    find(q: any): any;
    findById(id: string): any;
    save(item: Room): any;
}
