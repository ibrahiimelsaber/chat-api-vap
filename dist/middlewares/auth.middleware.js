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
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const typegoose_1 = require("typegoose");
const user_model_1 = require("../models/user.model");
const environment_1 = require("../environment");
const jwt = require("express-jwt");
let AuthMiddleware = class AuthMiddleware {
    constructor(userModel) {
        this.userModel = userModel;
    }
    use(req, res, next) {
        jwt({
            secret: environment_1.environment.JWT_SECRET_PASSWORD,
            algorithms: ['HS256'],
            isRevoked: async (req1, payload, done) => {
                if (!payload._id) {
                    return done(new common_1.UnauthorizedException('The token contains invalid credentials or has expired'));
                }
                const user = await this.userModel.findById(payload._id).exec();
                if (!user || !user.loggedIn)
                    return done(new common_1.UnauthorizedException('The user has been logged out'));
                done(null, false);
            },
        }).unless({ path: ['/api/auth/login', '/api/auth/sign-up'] })(req, res, next);
    }
};
AuthMiddleware = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ModelType !== "undefined" && typegoose_1.ModelType) === "function" ? _a : Object])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map