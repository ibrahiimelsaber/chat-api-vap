import { OnGatewayDisconnect } from '@nestjs/websockets';
import { ModelType } from 'typegoose';
import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';
import { Room } from '../../models/room.model';
import { CustomSocket } from '../../adapters/auth.adapter';
export declare class MessagesGateway implements OnGatewayDisconnect {
    private readonly messagesModel;
    private readonly roomsModel;
    private readonly usersModel;
    constructor(messagesModel: ModelType<Message>, roomsModel: ModelType<Room>, usersModel: ModelType<User>);
    handleDisconnect(client: CustomSocket): Promise<void>;
    enterChatRoom(client: CustomSocket, roomId: string): Promise<void>;
    leaveChatRoom(client: CustomSocket, roomId: string): Promise<void>;
    addMessage(client: CustomSocket, message: Message): Promise<void>;
}
