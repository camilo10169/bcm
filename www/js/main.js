$(document).on("pageinit", function() {
	localStorage.clear();
	
	var nextWhy = 0;
	var nextHow = 20;
	var nextWhat = 40;
	var ele;

	$('.type_pro').on('click', function() {
		var opt = parseInt($(this).attr('data-opt'));
		if (opt == 1) {
			localStorage.type_pro = 'new';
		} else {
			localStorage.type_pro = 'grow';
		}
	});

	$('.add_field').click(function() {
		var opt = parseInt($(this).attr('data-opt'));
		var section = location.pathname.split('/').pop().replace('.html', '');
		if (opt == 0) {
			var content = '<div id="content-'+nextWhy+'"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"><input type="text" id="txt-'+nextWhy+'" onclick="change_value('+nextWhy+')" class="ui-input-text ui-body-c txt-field" data-section="'+section+'"></div>&nbsp;<a id="add-'+nextWhy+'" href="#" data-role="button" data-icon="check" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Confirmar" onclick="save_op('+nextWhy+');" class="save_opt ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-notext ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Confirmar</span><span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span></span></a>&nbsp;<a id="del-'+nextWhy+'" href="#" onclick="del_op('+nextWhy+');" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Eliminar" class="del_opt ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext"><span class="ui-btn-inner"><span class="ui-btn-text">Eliminar</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a></div>';
			$('#element-0').append(content);
			nextWhy++;
		} else if (opt == 1) {
			var content = '<div id="content-'+nextHow+'"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"><input type="text" id="txt-'+nextHow+'" onclick="change_value('+nextHow+')" class="ui-input-text ui-body-c txt-field" data-section="'+section+'"></div>&nbsp;<a id="add-'+nextHow+'" href="#" data-role="button" data-icon="check" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Confirmar" onclick="save_op('+nextHow+');" class="save_opt ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-notext ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Confirmar</span><span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span></span></a>&nbsp;<a id="del-'+nextHow+'" href="#" onclick="del_op('+nextWhy+');" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Eliminar" class="del_opt ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext"><span class="ui-btn-inner"><span class="ui-btn-text">Eliminar</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>';
			$('#element-1').append(content);
			nextHow++;
		} else {
			var content = '<div id="content-'+nextWhat+'"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"><input type="text" id="txt-'+nextWhat+'" onclick="change_value('+nextWhat+')" class="ui-input-text ui-body-c txt-field" data-section="'+section+'"></div>&nbsp;<a id="add-'+nextWhat+'" href="#" data-role="button" data-icon="check" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Confirmar" onclick="save_op('+nextWhat+');" class="save_opt ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-notext ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Confirmar</span><span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span></span></a>&nbsp;<a id="del-'+nextWhat+'" href="#" onclick="del_op('+nextWhy+');" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Eliminar" class="del_opt ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext"><span class="ui-btn-inner"><span class="ui-btn-text">Eliminar</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>';
			$('#element-2').append(content);
			nextWhat++;
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

	for(var i = 0; i < 60; i++) {
		var section = location.pathname.split('/').pop().replace('.html', '');
		var value = localStorage[section+'-'+i];
		if(value != null || value != undefined) {
			var content = '<div id="content-'+i+'"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"><input type="text" value="'+value+'" onclick="change_value('+i+')" id="txt-'+i+'" class="ui-input-text ui-body-c txt-field" data-section="'+section+'"></div>&nbsp;<a id="add-'+i+'" href="#" data-role="button" data-icon="check" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Confirmar" onclick="save_op('+i+');" class="save_opt ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-notext ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Confirmar</span><span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span></span></a>&nbsp;<a id="del-'+i+'" href="#" onclick="del_op('+i+');" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" title="Eliminar" class="del_opt ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-notext"><span class="ui-btn-inner"><span class="ui-btn-text">Eliminar</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a></div>';
			switch(i) {
				case 0:
					ele = 0;
					break;
				case 20:
					ele = 1;
					break;
				case 40:
					ele = 2;
					break;
			}
			$('#element-'+ele).append(content);
		}
	}
});