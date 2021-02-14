import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { UnauthorizedError } from 'express-jwt';
export declare class UnauthorizedErrorFilter implements ExceptionFilter {
    catch(exception: UnauthorizedError, host: ArgumentsHost): void;
}
