document.addEventListener("DOMContentLoaded", function(){

    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");

    var picture_1 = document.querySelector(".picture_1 img");
    var picture_2 = document.querySelector(".picture_2 img");
    var picture_3 = document.querySelector(".picture_3 img");


    var pictures = document.querySelectorAll("img");
    var srcArr = [];

    for( var i = 0; i < pictures.length; i++) {
        srcArr.push(pictures[i].src);
    }

    let h = 0;
    let j = 1; 
    let k = 2;

    var nextPic = function(){
        h--;
        j--;
        k--;
        if( h < 0 ){
            h = 4;
        }
        if( j < 0 ){
            j = 4;
        }
        if( k < 0 ){
            k = 4;
        }
        picture_1.src = srcArr[h];
        picture_2.src = srcArr[j];
        picture_3.src = srcArr[k];
    }

    var prevPic = function(){
        h++;
        j++;
        k++;
        if( h > 4 ){
            h = 0;
        } 

        if( j > 4 ){
            j = 0;
        }

        if( k > 4 ){
            k = 0;
        }
        picture_1.src = srcArr[h];
        picture_2.src = srcArr[j];
        picture_3.src = srcArr[k];
    }

    // document.onkeydown = function(e){
    // console.log(e);
    // }

    document.addEventListener('keydown', function(e){
        if(e.key == "ArrowRight"){
            nextPic();
        }
    })

    next.addEventListener('click', function(){
       nextPic();
    });

    document.addEventListener("keydown", function(e){

        if( e.key == "ArrowLeft"){
            prevPic();
        }
    })

    prev.addEventListener('click', function(){
        prevPic();
    });

});