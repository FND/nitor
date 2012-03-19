// dynamically extend input grids by appending new rows
$("form table").on("change", "tr:last input", function(ev) {
	var el = $(this),
		currentRow = el.closest("tr"),
		newRow = el.closest("table").find("tr:last").clone(); // NB: won't work in IE - cf. http://bugs.jquery.com/ticket/9777
	newRow.html(newRow.html()). // ensures pristine state
		insertAfter(currentRow);
});
