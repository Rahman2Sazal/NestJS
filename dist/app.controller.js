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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const forbidden_exception_filter_1 = require("./forbidden-exception.filter");
const student_guard_1 = require("./student.guard");
const uppercase_pipe_1 = require("./uppercase.pipe");
let AppController = class AppController {
    getSecretData() {
        throw new common_1.ForbiddenException();
    }
    getStudentLounge() {
        return 'Welcome to the exclusive student lounge!';
    }
    getName(name) {
        return `Hello, ${name}!`;
    }
    getPublicData() {
        return 'This is public information!';
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('secret-data'),
    (0, common_1.UseFilters)(forbidden_exception_filter_1.ForbiddenExceptionFilter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getSecretData", null);
__decorate([
    (0, common_1.Get)('student-lounge'),
    (0, common_1.UseGuards)(student_guard_1.StudentGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getStudentLounge", null);
__decorate([
    (0, common_1.Get)('hello/:name'),
    __param(0, (0, common_1.Param)('name', uppercase_pipe_1.UppercasePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getName", null);
__decorate([
    (0, common_1.Get)('public-data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPublicData", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map