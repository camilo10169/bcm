$(document).on("pageinit", function() {
	// localStorage.clear();
	
	var nextWhy = 0;
	var nextHow = 20;
	var nextWhat = 40;
	var section = location.pathname.split('/').pop().replace('.html', '');
	var ele;

	$('.add_field').click(function() {
		var opt = parseInt($(this).attr('data-opt'));
		if (opt == 0) {
			nextWhy++;
			var content = '<div id="content-'+nextWhy+'"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"><input type="text" id="txt-'+nextWhy+'" onclick="change_value('+nextWhy+')" class="ui-input-text ui-body-c txt-field" data-section="'+section+'"></div>&nbsp;<a id="add-'+nextWhy+'" href="#" data-role="button" data-icon="check" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Confirmar" onclick="save_op('+nextWhy+');" class="save_opt ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-notext ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Confirmar</span><span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span></span></a>&nbsp;<a id="del-'+nextWhy+'" href="#" onclick="del_op('+nextWhy+');" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Eliminar" class="del_opt ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext"><span class="ui-btn-inner"><span class="ui-btn-text">Eliminar</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a></div>';
			$('#element-0').append(content);
		} else if (opt == 1) {
			nextHow++;
			var content = '<div id="content-'+nextHow+'"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"><input type="text" id="txt-'+nextHow+'" onclick="change_value('+nextHow+')" class="ui-input-text ui-body-c txt-field" data-section="'+section+'"></div>&nbsp;<a id="add-'+nextHow+'" href="#" data-role="button" data-icon="check" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Confirmar" onclick="save_op('+nextHow+');" class="save_opt ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-notext ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Confirmar</span><span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span></span></a>&nbsp;<a id="del-'+nextHow+'" href="#" onclick="del_op('+nextHow+');" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Eliminar" class="del_opt ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext"><span class="ui-btn-inner"><span class="ui-btn-text">Eliminar</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>';
			$('#element-1').append(content);
		} else {
			nextWhat++;
			var content = '<div id="content-'+nextWhat+'"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"><input type="text" id="txt-'+nextWhat+'" onclick="change_value('+nextWhat+')" class="ui-input-text ui-body-c txt-field" data-section="'+section+'"></div>&nbsp;<a id="add-'+nextWhat+'" href="#" data-role="button" data-icon="check" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Confirmar" onclick="save_op('+nextWhat+');" class="save_opt ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-notext ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Confirmar</span><span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span></span></a>&nbsp;<a id="del-'+nextWhat+'" href="#" onclick="del_op('+nextWhat+');" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Eliminar" class="del_opt ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext"><span class="ui-btn-inner"><span class="ui-btn-text">Eliminar</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>';
			$('#element-2').append(content);
		}
	});

	$('.save_opt').click(function() {
		var id = $(this).attr('id').split('-')[1];
		var val = $('input#txt-'+id).val();
		var section = $('input#txt-'+id).attr('data-section');
		localStorage[section+'-'+id] = val;
		$('#add-'+id).addClass('ui-disabled');
	});

	$('.del_opt').click(function(){
		var id = $(this).attr('id').split('-')[1];
		var section = $('input#txt-'+id).attr('data-section');
		var conf = confirm('¿Seguro que desea eliminar este campo?');
		if(conf) {
	  	localStorage.removeItem(section+'-'+id);
	  	$('#txt-'+id).parent().remove();
	  	$('#add-'+id).remove();
	  	$('#del-'+id).remove();
		}	
	});

	$('input.txt-field').on('click', function() {
		var id = $(this).attr('id').split('-')[1];
		$('#txt-'+id).on('keypress', function() {
			$('#add-'+id).removeClass('ui-disabled');
		});
	});

	var value0 = localStorage[section+'-0'];
	var value20 = localStorage[section+'-20'];
	var value40 = localStorage[section+'-40'];

	if(value0 != null || value0 != undefined) {
		$('#txt-0').val(value0);
		for(var i = 1; i < 20; i++) {
			var value = localStorage[section+'-'+i];
			if(value != null || value != undefined) {
				var content = '<div id="content-'+i+'"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"><input type="text" value="'+value+'" onclick="change_value('+i+')" id="txt-'+i+'" class="ui-input-text ui-body-c txt-field" data-section="'+section+'"></div>&nbsp;<a id="add-'+i+'" href="#" data-role="button" data-icon="check" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Confirmar" onclick="save_op('+i+');" class="save_opt ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-notext ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Confirmar</span><span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span></span></a>&nbsp;<a id="del-'+i+'" href="#" onclick="del_op('+i+');" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Eliminar" class="del_opt ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext"><span class="ui-btn-inner"><span class="ui-btn-text">Eliminar</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a></div>';
				$('#element-0').append(content);
			}
		}
	}
	if(value20 != null || value20 != undefined) {
		$('#txt-20').val(value20);
		for(var i = 21; i < 40; i++) {
			var value = localStorage[section+'-'+i];
			if(value != null || value != undefined) {
				var content = '<div id="content-'+i+'"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"><input type="text" value="'+value+'" onclick="change_value('+i+')" id="txt-'+i+'" class="ui-input-text ui-body-c txt-field" data-section="'+section+'"></div>&nbsp;<a id="add-'+i+'" href="#" data-role="button" data-icon="check" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Confirmar" onclick="save_op('+i+');" class="save_opt ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-notext ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Confirmar</span><span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span></span></a>&nbsp;<a id="del-'+i+'" href="#" onclick="del_op('+i+');" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Eliminar" class="del_opt ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext"><span class="ui-btn-inner"><span class="ui-btn-text">Eliminar</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a></div>';
				$('#element-1').append(content);
			}
		}
	}
	if(value40 != null || value40 != undefined) {
		$('#txt-40').val(value40);
		for(var i = 41; i < 60; i++) {
			var value = localStorage[section+'-'+i];
			if(value != null || value != undefined) {
				var content = '<div id="content-'+i+'"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"><input type="text" value="'+value+'" onclick="change_value('+i+')" id="txt-'+i+'" class="ui-input-text ui-body-c txt-field" data-section="'+section+'"></div>&nbsp;<a id="add-'+i+'" href="#" data-role="button" data-icon="check" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Confirmar" onclick="save_op('+i+');" class="save_opt ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-notext ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Confirmar</span><span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span></span></a>&nbsp;<a id="del-'+i+'" href="#" onclick="del_op('+i+');" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Eliminar" class="del_opt ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext"><span class="ui-btn-inner"><span class="ui-btn-text">Eliminar</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a></div>';
				$('#element-2').append(content);
			}
		}
	}
});