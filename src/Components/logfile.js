const log4js = require('log4js');
const log4jsCreator = () =>
{
    log4js.configure(
        {
            appenders: {fileappender : {type: 'file', filename: './logs/log4js.log'}},
            categories: {default: {appenders : ['fileAppender'], levels: 'info'}}
        }
    );

    const logger = log4js.getLogger();

    return logger;
}

export default log4jsCreator;