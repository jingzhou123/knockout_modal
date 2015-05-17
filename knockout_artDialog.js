ko.alert = function(msg) {
  return dialog({
    title: '提示',
    content: msg,
    okValue: '确定',
    ok: function() { return true; }
  }).show();
};
