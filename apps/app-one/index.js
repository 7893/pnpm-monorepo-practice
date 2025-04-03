const { formatUser } = require('@my-monorepo/utils');
const _ = require('lodash');

const user = { id: 1, name: 'Alice' };
console.log("App One starting...");
console.log("Using shared util:", formatUser(user)); // 使用 utils 包的函数

const shuffled = _.shuffle([1, 2, 3, 4]); // 使用 lodash
console.log("Shuffled array using lodash:", shuffled);
