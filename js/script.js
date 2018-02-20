var counter = 0;
var moves = 0;

// Add Images

for(i=1; i<=25; i++){
	$('#blandade_brickor').append("<img id='img"+i+"' target-div='div"+i+"' src='img/pic"+i+".jpeg' draggable='true' ondragstart='drag(event)'>");
}

// Adding Divs in the playing field

for(i=1; i<=25; i++){
	$('#spelplan').append("<div id='div"+i+"' ondrop='drop(event)' ondragover='allowDrop(event)'>");
};

// Shuffle Script

// (function($){

//     $.fn.shuffle = function() {

//         var allElems = this.get(),
//             getRandom = function(max) {
//                 return Math.floor(Math.random() * max);
//             },
//             shuffled = $.map(allElems, function(){
//                 var random = getRandom(allElems.length),
//                     randEl = $(allElems[random]).clone(true)[0];
//                 allElems.splice(random, 1);
//                 return randEl;
//            });

//         this.each(function(i){
//             $(this).replaceWith($(shuffled[i]));
//         });

//         return $(shuffled);

//     };

// })(jQuery);

// // Shuffuling all images

// $('img').shuffle();

// Drag & Drop events

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}



function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
		moves++;
    document.getElementById('cmoves').innerHTML = moves;

    if (document.getElementById(data).getAttribute("target-div") == ev.target.id) {
        ev.target.appendChild(document.getElementById(data));
        document.getElementById(data).setAttribute('draggable', false);
        document.getElementById(data).style.opacity = "0.5";
		counter++;
        document.getElementById('cmatches').innerHTML = counter;
    }

   else if (ev.target.nodeName == "IMG"){
        // If div has already img in div move img back to blandade brickor even if div id == img id
        // Use parent to figure it out
    }

    else {
        ev.target.appendChild(document.getElementById(data));

    }



    if (counter == 25) {
        setTimeout(function() { alert("Good job!"); }, 500);
    }
}

// Resetting the game

$('.reset-game-div').click(function() {
    location.reload();
});