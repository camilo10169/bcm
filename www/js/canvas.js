$(document).on("pageinit", function() {
	// localStorage.clear();

	var sections = ['proposition', 'segment', 'relationship', 'channel', 'partner', 'activity', 'resource', 'cost', 'revenue'];

	for (var i = 0; i < sections.length; i++) {
		for(var j = 0; j < 60; j++) {
			var value = localStorage[sections[i]+'-'+j];
			if(value != null || value != undefined) {
				$('#'+sections[i]).append('<li><a class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-notext ui-btn-up-e" href="#" data-role="button" data-icon="alert" data-iconpos="notext" data-theme="e" data-inline="true" data-opt="0" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Alerta"><span class="ui-btn-inner"><span class="ui-btn-text">Alerta</span><span class="ui-icon ui-icon-alert ui-icon-shadow">&nbsp;</span></span></a>'+value+'</li>');
				$('#'+sections[i]).parent().removeClass('ui-bar ui-bar-e');
				$('#'+sections[i]).parent().addClass('ui-bar ui-bar-c');
			}
		}
	}
});