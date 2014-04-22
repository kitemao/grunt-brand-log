/*
 *  Domino brand
 */


/**
 * @param  {Object} options 选项 （name, msg）
 * @param  {Function} log   log方法
 */
module.exports = function (options, log) {

    var name = options.name;
    var msg  = options.msg;
    
    var nameSpaces = 15 - 3 - name.length;
    while (nameSpaces--) {
        name += ' ';
    }

    var msgSpaces = 15 - 3 - msg.length;
    while (msgSpaces--) {
        msg += ' ';
    }
 
    log('   ' + name + 'ooo.                   o              ');
    log('   ' + msg  + '8  `8.                                ');
    log('               8   `8 .oPYo. ooYoYo. o8 odYo. .oPYo. ');
    log('               8    8 8    8 8  8  8  8 8` `8 8    8 ');
    log('               8   .P 8    8 8  8  8  8 8   8 8    8 ');
    log('               8ooo`  `YooP` 8  8  8  8 8   8 `YooP` ');
    log('               .....:::.....:..:..:..:....::..:.....:');
    log('               ::::::::::::::::::::::::::::::::::::::');
    log('               ::::::::::::::::::::::::::::::::::::::');

};