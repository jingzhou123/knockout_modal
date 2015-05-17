$(function() {

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


});
