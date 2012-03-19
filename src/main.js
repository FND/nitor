// dynamically extend input grids by appending new rows
$("form table").on("change", "tr:last input", function(ev) {
	var el = $(this),
		currentRow = el.closest("tr"),
		table = el.closest("table"),
		newRow = $("tr:last", table).clone(), // NB: won't work in IE - cf. http://bugs.jquery.com/ticket/9777
		rowCount = $("tr", table).length;

	newRow.html(newRow.html()); // ensures pristine state
	// update checkbox identifiers
	$("input[type=checkbox]", newRow).each(function(i, node) {
		$(node).val(rowCount - 1);
	});

	newRow.insertAfter(currentRow);
});
