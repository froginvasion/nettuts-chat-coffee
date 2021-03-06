 ((function(cb) {if (typeof(define) === 'function' && define.amd) {require(['contracts-js'], cb); } else if (typeof(require) === 'function') {cb(require('contracts-js')); } else {cb(window['contracts-js']); } })(function(__contracts) { var Undefined,Null,Num,Bool,Str,Odd,Even,Pos,Nat,Neg,Self,Any,None,__define,__require,__exports;Undefined=__contracts.Undefined;Null=__contracts.Null;Num=__contracts.Num;Bool=__contracts.Bool;Str=__contracts.Str;Odd=__contracts.Odd;Even=__contracts.Even;Pos=__contracts.Pos;Nat=__contracts.Nat;Neg=__contracts.Neg;Self=__contracts.Self;Any=__contracts.Any;None=__contracts.None;if(typeof define==="function"&&define.amd){__define=function(a,b,c){var d,e;if(typeof a!=="string"){d=b}else{d=c}e=function(){var a,b,c=[];for(a=0;a<arguments.length;a++){c[a]=__contracts.use(arguments[a],"#{o.filename}")}b=d.apply(this,c);return __contracts.setExported(b,"#{o.filename}")};if(!Array.isArray(b)){b=e}define(a,b,e)}}else if(typeof require!=="undefined"&&typeof exports!=="undefined"){__exports=__contracts.exports("#{o.filename}",exports);__require=function(a){a=require.apply(this,arguments);return __contracts.use(a,"#{o.filename}")}} (function(define, require, exports) {
  
  jQuery(function() {
    var content, field, messages, name, sendButton, socket;
    messages = [];
    socket = io.connect('127.0.0.1:3700');
    field = $('#field');
    sendButton = $('#send');
    content = $('#content');
    name = $('#name');
    socket.on('message', function(data) {
      var html, i, _i, _ref;
      if (data.message) {
        messages.push(data);
        html = '';
        for (i = _i = 0, _ref = messages.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
          html += messages[i].message + '<br />';
        }
        return content.html(html);
      } else {
        return console.log('There is a problem', data);
      }
    });
    return sendButton.on('click', function() {
      var text;
      if (name.val() && name.val() === "") {
        return alert("Please type your name");
      } else {
        text = field.val();
        return socket.emit('send', {
          message: text,
          username: name.val()
        });
      }
    });
  });

}).call(this, __define, __require, __exports); }));