//引入处理命令行参数的包，识别命令行
import yargs from 'yargs';
//区分开发环境和线上环境（通过命令行中的参数）
const args = yargs

    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })
    //是否监听开发环境的文件更改，是否自动编译
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    //输出命令行执行的日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

.option('sourcemaps', {
        describe: 'force the creation of sroucemaps'
    })
    //设置服务器端口
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })
    //输入命令行内容以字符串解析
    .argv

export default args;