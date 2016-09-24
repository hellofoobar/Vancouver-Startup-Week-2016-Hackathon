var myAppRef = new Firebase("https://boiling-fire-1518.firebaseio.com/");
var movieRef = new Firebase("https://boiling-fire-1518.firebaseio.com/movies");
var userRef = new Firebase("https://boiling-fire-1518.firebaseio.com/user");

// movieRef.push({
//   name:"#movie_name",
//   date:"#movie_date",
//   price:"#movie_price", 
//   ticketLeft: "ticketLeft",
//   id:"movie_id"
// });

// myAppRef.set({movies: movieList});
myAppRef.child("movies").on("value", function(snapshot) {
  var movieList = snapshot.val();
  $('.data-row').remove();
  for (var key in movieList) {
  var currentTr = $('<tr>').addClass('data-row').attr('id', key).appendTo('.hcenter');
  $('<td>').addClass('movie-name').text(movieList[key].name).appendTo(currentTr);
  $('<td>').text('$' + movieList[key].price).appendTo(currentTr);
  $('<td>').text(movieList[key].date).appendTo(currentTr);
  $('<td>').text(movieList[key].ticketLeft).appendTo(currentTr);
  $('<td>').html('<button class="primary-btn btn-buy" data-toggle="modal" data-target="#buy-ticket-modal">Buy Ticket</button>').appendTo(currentTr);
}

});





var buttonClicked;

$('.hcenter').on('click', '.btn-buy', function(event){
  $('input').removeClass('input-invalid');
  $('.text-danger').remove();
  buttonClicked = event.target;
  var movieRow = $(buttonClicked).parent().parent();
  var movieName = movieRow.find('.movie-name').text();
 
  $('#movie_id').val(movieRow.attr('id'));
  $('#buy-ticket-modal .modal-header').html('<h5>Buy ' + movieName + ' Ticket</h5>');
});

function checkInvalid(user, attribute) {
  if (user[attribute] == "") {
    $('#' + attribute).addClass('input-invalid').after('<p class="text-danger">Please complete ' + attribute + ' field</p>');
    return true;
  } else {
    return false;
  }
}

$('#buy-ticket-btn').click(function(event) {
  var user = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    phone: $('#phone').val(),
    movie_id: $('#movie_id').val()
  };
  $('input').removeClass('input-invalid');
  $('.text-danger').remove();
  if (!checkInvalid(user, 'first_name') 
    && !checkInvalid(user, 'last_name') 
    && !checkInvalid(user, 'phone')) {
    console.log(user);
    var newTicketLeft = $(buttonClicked).parent().prev().text() - 1;
    var currentMovieRef = new Firebase("https://boiling-fire-1518.firebaseio.com/movies/"+user.movie_id);
    currentMovieRef.update({ticketLeft:newTicketLeft})

    if (newTicketLeft >= 0) {
      $(buttonClicked).parent().prev().text(newTicketLeft);
      if (newTicketLeft === 0) {
        $(buttonClicked).text("Sold Out").prop('disabled', 'disabled').addClass('btn-disabled').removeClass('primary-btn btn-buy');
      }
    }
    $('#buy-ticket-modal').modal('hide');
    $('input[type="text"]').val("");
    userRef.push(user);

  }
});











$('#add-movie-btn').click(function(event) {
  var user = {
    name: $('#movie_name').val(),
    date: $('#movie_date').val(),
    price: $('#movie_price').val(),
    ticketLeft: $('#ticketLeft').val()

  };
  movieRef.push(user);
});










