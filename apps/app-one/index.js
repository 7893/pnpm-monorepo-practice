import { formatUser } from '@my-monorepo/utils'; // 使用 import
import _ from 'lodash'; // 对于 lodash 这种默认导出的库，这样 import

const user = { id: 1, name: 'Alice' };
console.log("App One starting...");
console.log("Using shared util:", formatUser(user));

const shuffled = _.shuffle([1, 2, 3, 4]);
console.log("Shuffled array using lodash:", shuffled);
