/**
 * 日志模块 便于后端调试
 */

const info = (...params) => {
    console.log(...params)
}

const error = (...params) => {
    console.error(...params)
}

module.exports = {
    info, error
}