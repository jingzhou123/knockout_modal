$(function() {

  var bodyViewModel = {
    modalContentParent: ko.observable('I come from your context parent')
  };

  $('#test-alert').click(function() {
    ko.alert('i am a msg to notify you i am here');
  });

  $('#test-confirm').click(function() {

    ko.confirm('are you sure let me go?', 'watch out').then(function() {
      ko.alert('ok btn is clicked');
    }, function() {
      ko.alert('cancel btn is clicked');
    });

  });

  $('#test-modal').click(function() {

    ko.modal({
      templateId: 'modal',
      title: 'abc',
      viewModel: $.extend({
        modalContent: ko.observable('this is modal content'),
      }, bodyViewModel),
      
    });
  });


  ko.applyBindings(bodyViewModel);


});
