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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const typegoose_1 = require("typegoose");
const user_model_1 = require("./user.model");
const room_model_1 = require("./room.model");
class Message extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Message.prototype, "text", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Date)
], Message.prototype, "created", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: user_model_1.User }),
    __metadata("design:type", Object)
], Message.prototype, "owner", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: room_model_1.Room }),
    __metadata("design:type", Object)
], Message.prototype, "room", void 0);
exports.Message = Message;
//# sourceMappingURL=message.model.js.map