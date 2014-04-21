/*
 *  Pikachu brand
 */


/**
 * @param  {Object} options 选项 （name, msg）
 * @param  {Function} log   log方法
 */
module.exports = function (options, log) {

    var name = options.name;
    var msg  = options.msg;
    
    var nameSpaces = 19 - 3 - name.length;
    while (nameSpaces--) {
        name += ' ';
    }

    var msgSpaces = 16 - 3 - msg.length;
    while (msgSpaces--) {
        msg += ' ';
    }


    log('   ' + name    +  'へ　　　　　／|');
    log('   ' + msg  +    '/＼7　　　 ∠＿/');
    log('　               /　│　　 ／　／');
    log('        　      │　Z ＿,＜　／　　 /`ヽ');
    log('     　         │　　　　　ヽ　　 /　　〉');
    log('           　    Y　　　　　`　 /　　/');
    log('           　   ｲ ●　､　●　　⊂⊃〈　　/');
    log('              　()　 へ　　　　|　＼〈');
    log('              　　ｰ ､_　 ィ　 │ ／／');
    log('           　    / へ　　 /　ﾉ＜| ＼＼');
    log('           　    ヽ_ﾉ　　(_／　 │／／');
    log('        　      　7　　　　　　　|／');
    log('        　　      ＞―r￣￣`ｰ―＿');

};