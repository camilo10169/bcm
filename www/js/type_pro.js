$('.type_pro').on('click', function() {
	var opt = parseInt($(this).attr('data-opt'));
	if (opt == 1) {
		localStorage.type_pro = 'new';
	} else {
		localStorage.type_pro = 'grow';
	}
});