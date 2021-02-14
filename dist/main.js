"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const unauthorized_error_filter_1 = require("./filters/unauthorized-error.filter");
const auth_adapter_1 = require("./adapters/auth.adapter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalFilters(new unauthorized_error_filter_1.UnauthorizedErrorFilter());
    app.useWebSocketAdapter(new auth_adapter_1.AuthAdapter(app));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map