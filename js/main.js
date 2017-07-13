$(document).ready(function(){
	var ui = prompt('Choose the size of the grid (1-100 for best performance)');
	if (ui < 4 || typeof(ui) !== 'number'){
		ui = 4;
		alert('Default minimum of 4 was chosen.');
	} else if(ui > 100) {
		ui = 100;
		alert('Default maximum of 100 was chosen');
	}
	createGrid(ui);
	$('.grid').hover(function(){
		$(this).css('background-color', 'black');
	});
});

function createGrid(ui) {          
	for(var i = 0; i < ui*ui; i++){
		$('.container').append('<div class="grid" style="height:'+100/ui+'%; width:'+100/ui+'%"></div>')
	}
}

