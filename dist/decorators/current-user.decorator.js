"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentUser = common_1.createParamDecorator((data, ctx) => ctx.switchToHttp().getRequest().user);
//# sourceMappingURL=current-user.decorator.js.map