Install TypeScript NPM Module:
npm i -g typescript

Create tsconfig.json
tsc --init

Setup tsconfig.json
{
"compilerOptions": {
"target": "es2017",
"module": "commonjs",
"outDir": "./dist",
"strict": true,
"baseUrl": "./",
"typeRoots": [
"node_modules/@types"
],
"types": [
"node"
],
"esModuleInterop": true,
"inlineSourceMap": true
}}

Install type definitions for Node.js
npm i -D @types/node

Create Source File
create file in ./src/index.js 

Compile from TypeScript to JS
run tsc to compile

Install Tool to auto compile and run
npm i -g ts-node

Auto compile and run
ts-node src/index.ts

Lambda Starter File:
export const handler = async (event: any = {}): Promise<any> => {
    console.log('Hello World!');
    const response = JSON.stringify(event, null, 2);
    return response;
}
