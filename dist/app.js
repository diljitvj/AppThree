"use strict";

var userData = null,
    ajaxUrl = "https://jsonplaceholder.typicode.com/users";
getJson();

//Get Json data from external link and inject data to Kendo Grid
function getJson() {
	$.ajax({
		url: ajaxUrl,
		dataType: "json",
		success: function success(data) {
			userData = data;
			$("#loader").hide();
			addKendoGrid();
		}
	});
}

//Populate the data to the div
function addKendoGrid() {

	$("#grid").kendoGrid({

		dataSource: {
			data: userData,
			pageSize: 3
		},

		sortable: true,
		scrollable: false,
		pageable: {
			input: true,
			numeric: false
		},
		reorderable: true,
		resizable: true,
		columns: [{
			field: "name",
			title: "Name"
		}, {
			field: "phone",
			title: "Contact Number"
		}, {
			field: "email",
			title: "Email"
		}, {
			field: "company.name",
			title: "Company"
		}, {
			field: "address.street+', '+address.city",
			title: "Address",
			sortable: false
		}]

	});
}
//# sourceMappingURL=app.js.map
