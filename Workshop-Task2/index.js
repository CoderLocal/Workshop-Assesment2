$(document).ready(function () {
    $('#addImage').click(function () {
      var imageUrl = $('#imageUrl').val();
      $.ajax({
        url: 'http://localhost:5000/images/add?image=' + imageUrl,
        type: 'GET',
        success: function (data) {
          window.location.href = 'http://localhost:5500';
        },
      });
    });
  
    //   add like for each cards separately
    $('#imageContainer').on('click', '.btn', function () {
      var like = $(this).text();
      var likeCount = parseInt(like.split(' ')[1]);
      likeCount++;
      $(this).text(`👍 ${likeCount}`);
      $.ajax({
        url: 'http://localhost:5000/images/add?image=' + imageUrl,
        type: 'POST',
    });
  
    // ajax request to get data from the flask server
    $.ajax({
      url: 'http://localhost:5000/images',
      type: 'GET',
      success: function (data) {
        console.log(data);
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
          var cardHtml = `<div class="card mt-5 ml-5" style="width: 18rem">
      <img
        src="${data[i].imageUrl}"
        class="card-img-top"
        alt="..." />
      <div
        class="card-body d-flex justify-content-between align-items-center">
        <a
          class="card-title"
          download="image.jpg"
          href="${data[i].imageUrl}"
          >Download</a
        >
        <button class="btn btn-primary">👍 ${data[i].likes}</button>
      </div>
    </div>`;
          $('#imageContainer').append(cardHtml);
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  };