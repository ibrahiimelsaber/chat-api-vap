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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const user_model_1 = require("../../models/user.model");
const typegoose_1 = require("typegoose");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt_1 = require("bcrypt");
const current_user_decorator_1 = require("../../decorators/current-user.decorator");
const environment_1 = require("../../environment");
let AuthController = class AuthController {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async login(credentials) {
        const user = await this.userModel.findOne({ nickname: credentials.nickname }).exec();
        if (!user)
            throw new common_1.UnauthorizedException('The nickname/password combination is invalid');
        const isMatch = await bcrypt_1.compare(credentials.password, user.password);
        if (!isMatch)
            throw new common_1.UnauthorizedException('The nickname/password combination is invalid');
        user.loggedIn = true;
        await user.save();
        return { token: jsonwebtoken_1.sign({ _id: user._id, nickname: user.nickname }, environment_1.environment.JWT_SECRET_PASSWORD, { expiresIn: '1h', algorithm: 'HS256' }) };
    }
    async logout(user) {
        await this.userModel.findByIdAndUpdate(user._id, { loggedIn: false });
        return { message: 'Logout Successfully' };
    }
    async signUp(signUpCredentials) {
        signUpCredentials.password = await bcrypt_1.hash(signUpCredentials.password, 10);
        await this.userModel.create(signUpCredentials);
        return { message: 'User Created Successfully' };
    }
};
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Get('logout'),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    common_1.Post('sign-up'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
AuthController = __decorate([
    common_1.Controller('api/auth'),
    __param(0, nestjs_typegoose_1.InjectModel(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map