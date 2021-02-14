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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsController = void 0;
const common_1 = require("@nestjs/common");
const room_model_1 = require("../../models/room.model");
const typegoose_1 = require("typegoose");
const nestjs_typegoose_1 = require("nestjs-typegoose");
let RoomsController = class RoomsController {
    constructor(model) {
        this.model = model;
    }
    find(q) {
        if (q)
            return this.model.find({ name: { $regex: new RegExp(`.*${q}.*`) } });
        else
            return this.model.find();
    }
    findById(id) {
        return this.model.findById(id);
    }
    save(item) {
        return item._id ? this.model.findByIdAndUpdate(item._id, item, { new: true }) : this.model.create(item);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "find", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_model_1.Room]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "save", null);
RoomsController = __decorate([
    common_1.Controller('api/rooms'),
    __param(0, nestjs_typegoose_1.InjectModel(room_model_1.Room)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object])
], RoomsController);
exports.RoomsController = RoomsController;
//# sourceMappingURL=rooms.controller.js.map