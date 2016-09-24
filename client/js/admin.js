var myAppRef = new Firebase("https://boiling-fire-1518.firebaseio.com/");
var movieRef = new Firebase("https://boiling-fire-1518.firebaseio.com/movies");
var userRef = new Firebase("https://boiling-fire-1518.firebaseio.com/user");


// var currentMovieRef = new Firebase("https://boiling-fire-1518.firebaseio.com/movies/");
movieRef.on("value", function(snapshot) {
	  	var movieList =snapshot.val();
});




myAppRef.child("user").on("value", function(snapshot) {
  var userList = snapshot.val();
  console.log(snapshot.val(), snapshot.val().length);


  $('.data-row').remove();

  for (var key in userList) {
  	var currentTr = $('<tr>').addClass('data-row').attr('id', key).appendTo('.hcenter');
  	$('<td>').addClass('first_name').text(userList[key].first_name).appendTo(currentTr);
  		$('<td>').addClass('last_name').text(userList[key].last_name).appendTo(currentTr);
  		$('<td>').text(userList[key].phone).appendTo(currentTr);
	  




	  // var currentMovieRef = new Firebase("https://boiling-fire-1518.firebaseio.com/movies/"+ userList[key].movie_id);
	  // currentMovieRef.on("value", function(snapshot) {
	  // 	var movieList =snapshot.val();
	  	
  		
	  // 	$('<td>').addClass('movie-name').text(movieList.name).appendTo(currentTr);
	  // 	$('<td>').text(movieList.price).appendTo(currentTr);
	  // 	$('<td>').text(movieList.date).appendTo(currentTr);
	  // });

}
});















