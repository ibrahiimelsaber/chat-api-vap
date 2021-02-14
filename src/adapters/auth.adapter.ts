import { IoAdapter } from '@nestjs/platform-socket.io';
import { verify } from 'jsonwebtoken';
import { Socket } from 'socket.io';
import { environment } from '../environment';
import { User } from '../models/user.model';

export interface CustomSocket extends Socket {
  user: User;
}

export class AuthAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    const server = super.createIOServer(port, options);
    server.use((socket: CustomSocket, next) => {
      if (socket.handshake.query && socket.handshake.query.token) {
        verify(
          socket.handshake.query.token,
          environment.JWT_SECRET_PASSWORD,
          (err, decoded) => {
            // <3>
            if (err) {
              next(new Error('Authentication error'));
            } else {
              socket.user = decoded;
              next();
            }
          },
        );
      } else {
        next(new Error('Authentication error'));
      }
    });
    return server;
  }
}
