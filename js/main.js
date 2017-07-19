$(document).ready(function(){
	createGrid();
	$('.clear').on('click', function() {
		$('.container').empty();
		createGrid();
	});
});

function createGrid(ui) {       
	var ui = prompt('Choose the size of the grid (4-100 only)');
	if (ui < 4 || typeof(parseInt(ui)) !== 'number'){
		ui = 4;
		alert('Default minimum of 4 was chosen');
	} else if(ui > 100) {
		ui = 100;
		alert('Default maximum of 100 was chosen');
	}

	for(var i = 0; i < ui*ui; i++){
		$('.container').append('<div class="grid" style="height:'+100/ui+'%; width:'+100/ui+'%"></div>')
	}

	$('.grid').hover(function(){
		$(this).css('background-color', 'black');
	});
}

