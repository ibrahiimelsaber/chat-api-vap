"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
const dotenv_1 = require("dotenv");
const fs_1 = require("fs");
exports.environment = dotenv_1.parse(fs_1.readFileSync(`environments/${process.env.NODE_ENV || 'local'}.env`));
//# sourceMappingURL=environment.js.map