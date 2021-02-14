"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const express_jwt_1 = require("express-jwt");
let UnauthorizedErrorFilter = class UnauthorizedErrorFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.status;
        response
            .status(status)
            .json({
            statusCode: status,
            error: exception.code,
            message: exception.message,
        });
    }
};
UnauthorizedErrorFilter = __decorate([
    common_1.Catch(express_jwt_1.UnauthorizedError)
], UnauthorizedErrorFilter);
exports.UnauthorizedErrorFilter = UnauthorizedErrorFilter;
//# sourceMappingURL=unauthorized-error.filter.js.map