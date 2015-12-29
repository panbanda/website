(function($) {

  $.getJSON('https://raw.githubusercontent.com/jylinman/resume/master/samples.json', function(data) {
    $.each(data.samples, function(i, item) {
      addCard(item);
    });
  });

  function addCard(item) {
    var html = '<div class="card">';
        html += '<div class="content">';
        html += '<div class="header">'+ item.title +'</div>';
        html += '<div class="description">'+ item.summary +'</div>';
        html += '</div>';

        // Add button
        if (item.url) {
          html += '<a target="_blank" class="ui bottom attached button" href="'+ item.url +'"><i class="add icon"></i>View Project</a>';
        }

        html += '</div>';

    $('#project-cards').append(html);
  }

})(jQuery);
