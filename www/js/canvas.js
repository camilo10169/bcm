$(document).on("pageinit", function() {
	// localStorage.clear();

	var sections = ['proposition', 'segment', 'relationship', 'channel', 'partner', 'activity', 'resource', 'cost', 'revenue'];

	for (var i = 0; i < sections.length; i++) {
		for(var j = 0; j < 60; j++) {
			var value = localStorage[sections[i]+'-'+j];
			if(value != null || value != undefined) {
				$('#'+sections[i]).append('<li>'+value+'</li>');
				$('#'+sections[i]).parent().removeClass('ui-bar ui-bar-e');
				$('#'+sections[i]).parent().addClass('ui-bar ui-bar-c');
			}
		}
	}
});