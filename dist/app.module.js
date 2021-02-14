"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const messages_gateway_1 = require("./gateways/messages/messages.gateway");
const messages_controller_1 = require("./controllers/messages/messages.controller");
const rooms_controller_1 = require("./controllers/rooms/rooms.controller");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const message_model_1 = require("./models/message.model");
const room_model_1 = require("./models/room.model");
const user_model_1 = require("./models/user.model");
const auth_controller_1 = require("./controllers/auth/auth.controller");
const auth_middleware_1 = require("./middlewares/auth.middleware");
const environment_1 = require("./environment");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware)
            .forRoutes('/api');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forRoot(environment_1.environment.MONGO_DB_URL, {}),
            nestjs_typegoose_1.TypegooseModule.forFeature([message_model_1.Message, room_model_1.Room, user_model_1.User]),
        ],
        controllers: [
            app_controller_1.AppController,
            rooms_controller_1.RoomsController,
            messages_controller_1.MessagesController,
            auth_controller_1.AuthController,
        ],
        providers: [app_service_1.AppService, messages_gateway_1.MessagesGateway],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map