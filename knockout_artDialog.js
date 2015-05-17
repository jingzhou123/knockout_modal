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

ko.modal = function(options) {

  var viewModel = options.viewModel || false;
  var title     = options.title     || '';
  var templateId  = options.templateId  || '';
  
  var ele       = templateId ? $('#' + templateId).html() : '';
  var d         = dialog({
    content : ele,
    title   : title,
    onclose : function() {
      ko.cleanNode(this.__popup[0]);
    }
  });

  if (viewModel) {
    ko.applyBindings(viewModel, d.__popup[0]);
  }

  d.showModal();
};
