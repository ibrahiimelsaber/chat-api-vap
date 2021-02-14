"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const typegoose_1 = require("typegoose");
const message_model_1 = require("../../models/message.model");
const user_model_1 = require("../../models/user.model");
const room_model_1 = require("../../models/room.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
let MessagesGateway = class MessagesGateway {
    constructor(messagesModel, roomsModel, usersModel) {
        this.messagesModel = messagesModel;
        this.roomsModel = roomsModel;
        this.usersModel = usersModel;
    }
    async handleDisconnect(client) {
        client.server.emit('users-changed', { user: client.user.nickname, event: 'left' });
    }
    async enterChatRoom(client, roomId) {
        client.join(roomId).to(roomId)
            .emit('users-changed', { user: client.user.nickname, event: 'joined' });
    }
    async leaveChatRoom(client, roomId) {
        client.broadcast.to(roomId).emit('users-changed', { user: client.user.nickname, event: 'left' });
        client.leave(roomId);
    }
    async addMessage(client, message) {
        message.owner = client.user._id;
        message.created = new Date();
        message = (await this.messagesModel.create(message)).toJSON();
        message.owner = { _id: client.user._id, nickname: client.user.nickname };
        client.server.in(message.room).emit('message', message);
    }
};
__decorate([
    websockets_1.SubscribeMessage('enter-chat-room'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MessagesGateway.prototype, "enterChatRoom", null);
__decorate([
    websockets_1.SubscribeMessage('leave-chat-room'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MessagesGateway.prototype, "leaveChatRoom", null);
__decorate([
    websockets_1.SubscribeMessage('add-message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, message_model_1.Message]),
    __metadata("design:returntype", Promise)
], MessagesGateway.prototype, "addMessage", null);
MessagesGateway = __decorate([
    websockets_1.WebSocketGateway(),
    __param(0, nestjs_typegoose_1.InjectModel(message_model_1.Message)),
    __param(1, nestjs_typegoose_1.InjectModel(room_model_1.Room)),
    __param(2, nestjs_typegoose_1.InjectModel(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _b : Object, typeof (_c = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _c : Object])
], MessagesGateway);
exports.MessagesGateway = MessagesGateway;
//# sourceMappingURL=messages.gateway.js.map