"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const student_guard_1 = require("./student/student.guard");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalGuards(new student_guard_1.StudentGuard());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map