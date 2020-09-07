"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const ProjectResolver_1 = __importDefault(require("./resolvers/ProjectResolver"));
const TaskResolver_1 = __importDefault(require("./resolvers/TaskResolver"));
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [ProjectResolver_1.default, TaskResolver_1.default],
            emitSchemaFile: true
        });
        const server = new graphql_yoga_1.GraphQLServer({ schema });
        server.start(() => console.log(`Server is running on http://localhost:4000`));
    });
}
bootstrap();
//# sourceMappingURL=index.js.map