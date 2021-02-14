"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdapter = void 0;
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const jsonwebtoken_1 = require("jsonwebtoken");
const environment_1 = require("../environment");
class AuthAdapter extends platform_socket_io_1.IoAdapter {
    createIOServer(port, options) {
        const server = super.createIOServer(port, options);
        server.use((socket, next) => {
            if (socket.handshake.query && socket.handshake.query.token) {
                jsonwebtoken_1.verify(socket.handshake.query.token, environment_1.environment.JWT_SECRET_PASSWORD, (err, decoded) => {
                    if (err) {
                        next(new Error('Authentication error'));
                    }
                    else {
                        socket.user = decoded;
                        next();
                    }
                });
            }
            else {
                next(new Error('Authentication error'));
            }
        });
        return server;
    }
}
exports.AuthAdapter = AuthAdapter;
//# sourceMappingURL=auth.adapter.js.map