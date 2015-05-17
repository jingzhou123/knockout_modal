ko.alert = function(msg) {
  return dialog({
    title: '提示',
    content: msg,
    okValue: '确定',
    ok: function() { return true; }
  }).show();
};

ko.confirm = function(html, title) {

  var dfd = $.Deferred();
  var d = dialog({

    title: title,
    content: html,
    okValue: '确定',
    ok: function() {
      dfd.resolve();
    },
    cancelValue: '取消',
    cancel: function() {
      dfd.reject();
    },

  }).show();

  return dfd.promise();
};
