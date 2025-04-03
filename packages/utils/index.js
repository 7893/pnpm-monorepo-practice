/**
 * 格式化用户信息 (示例)
 * @param {object} user - 用户对象，期望有 id 和 name 属性
 * @param {number} user.id
 * @param {string} user.name
 * @returns {string}
 */
function formatUser(user) {
  // 实际项目中会使用来自 @my-monorepo/types 的类型进行校验或转换
  return `User (ID: ${user.id}, Name: ${user.name})`;
}

module.exports = { formatUser };
