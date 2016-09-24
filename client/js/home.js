var posters = [
	{
		poster_url:"img/go1.jpg",
		name:"魔法科高中的劣等生",
		targetName:"#firstModal",

	},
	{
		poster_url:"img/go2.jpg",
		name:"命运守护夜",
		targetName:"#secondModal"
	},
	{
		poster_url:"img/go3.jpg",
		name:"刀劍神域",
		targetName:"#thirdModal",
	}

];

for(var i = 0; i < posters.length; i++ ){
	var currentDiv = $('<div>').appendTo('.posters');

	$('<img>').attr('src', posters[i].poster_url).attr('data-toggle',"modal").attr('data-target',posters[i].targetName).appendTo(currentDiv);
	

	$('<h3>').text(posters[i].name).appendTo(currentDiv);
}