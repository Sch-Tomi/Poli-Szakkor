function write(a) {
    $('#output').append('<p>' + a + '</p>')
}

function reload() {
    location.reload()
}

function clear() {
    $('#output').html('')
}

function myFUNYFUN(a) {
    alert(a)
}

$(document).ready(function() {

	$("#reload").on('click', function(e){
		e.preventDefault();
		reload()
	})

	$("#clear").on('click', function(e){
		e.preventDefault();
		clear()
	})

	});
