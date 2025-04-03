const { formatUser } = require('@my-monorepo/utils'); // 再次使用 utils

const user = { id: 3, name: 'Charlie' };
console.log("App Three starting...");
console.log("Using the shared util again:", formatUser(user));
