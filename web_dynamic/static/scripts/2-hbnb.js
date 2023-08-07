// This script should be executed only when the DOM is loaded
$(function () {
  const amenityDict = {};
  $('input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
      amenityDict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenityDict[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenityDict).join(', '));
  });
}
);

// Request the url http://0.0.0.0:5001/api/v1/status/:
// If the status is “OK”, add the class available to the DIV#api_status
// Otherwise, remove the class available to the DIV#api_status
$( window ).on( "load", function() {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  }
  );
}
);
