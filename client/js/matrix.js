var matrix=document.getElementById("matrix");
  	var context=matrix.getContext("2d");
  matrix.height=window.innerHeight;
  matrix.width=window.innerWidth;
  	var drop=[];
  	var font_size=16;
  	var columns=matrix.width/font_size;
  	for(var i=0;i<columns;i++)
  		drop[i]=1;
  	
  	function drawMatrix(){
  
  	context.fillStyle="rgba(0, 0, 0, 0.1)"; 
  	context.fillRect(0,0,matrix.width,matrix.height);
  
  	context.fillStyle="green";
  	context.font=font_size+"px";
  	for(var i=0;i<columns;i++){
  		context.fillText(Math.floor(Math.random()*2),i*font_size,drop[i]*font_size);/*get 0 and 1*/
  
  		if(drop[i]*font_size>(matrix.height*2/3)&&Math.random()>0.85)/*reset*/
  			drop[i]=0;
  		drop[i]++;
  	}
  }
  	setInterval(drawMatrix,40);

  window.addEventListener( 'resize', function(){

    matrix.height=window.innerHeight;
    matrix.width=window.innerWidth;
    var drop=[];
    var font_size=16;
    var columns=matrix.width/font_size;
    for(var i=0;i<columns;i++)
      drop[i]=1;
  

  })