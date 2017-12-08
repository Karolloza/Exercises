document.addEventListener("DOMContentLoaded", function(){

	var imageArr = document.querySelectorAll("img");
	var boxArr = document.querySelectorAll(".box");


	for(var i = 0; i < imageArr.length; i++){
		imageArr[i].addEventListener("dragstart", function(e){
		var DraggedImgSrc = this.src;
		console.log(DraggedImgSrc);
		e.dataTransfer.setData('src', DraggedImgSrc);
		});

		imageArr[i].addEventListener("dragend", function(e){
			this.remove();
		});
	}

	for(var j = 0; j < boxArr.length; j++){

		boxArr[j].addEventListener("dragenter", function(e){
			e.preventDefault();
		});
		boxArr[j].addEventListener("dragover", function(e){
			e.preventDefault();
		});

		boxArr[j].addEventListener("drop", function(e){
			e.preventDefault();

		const newImg = document.createElement('img');
		newImg.src = e.dataTransfer.getData('src');
		this.appendChild(newImg);

		// imageArr.push(newImg); <-----  Uncaught TypeError: imageArr.push is not a function

		});


	}


})