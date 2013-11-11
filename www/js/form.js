function save_op(id) {
	var val = $('input#txt-'+id).val();
	var section = $('input#txt-'+id).attr('data-section');
	localStorage.setItem(section+'-'+id, val);
	$('#add-'+id).addClass('ui-disabled');
}

function del_op(id) {
	var section = $('input#txt-'+id).attr('data-section');
	var conf = confirm('¿Seguro que desea eliminar este campo?');
	if(conf) {
  	localStorage.removeItem(section+'-'+id);
  	$('#txt-'+id).parent().remove();
  	$('#add-'+id).remove();
  	$('#del-'+id).remove();
	}
}

function change_value(id) {
	$('#txt-'+id).on('keypress', function() {
		$('#add-'+id).removeClass('ui-disabled');
	});
}