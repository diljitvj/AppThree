/*const firstName = "Thilak";
let lastName = "Rao";

const sayName = (fName, lName) => {
 return `Hello ${fName} ${lName}`
};

alert(sayName(firstName, lastName));*/

let userData = null,
	ajaxUrl = "https://jsonplaceholder.typicode.com/users";

		$.ajax({
					url: ajaxUrl,
					dataType: "json",
					success:
						function(userData){

							console.log(userData);
							$("#grid").kendoGrid({

								dataSource: {
											data: userData,
											pageSize: 3
											},

								//height: 200,
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
											title: "Name",
										},
										  {
											field: "phone",
											title: "Contact Number",
										},
										  {
											field: "email",
											title: "Email",
										},
										  {
											field: "company.name",
											title: "Company",
										},
										  {
											field: "address.street+', '+address.city",
											title: "Address",
											sortable: false
										}

										 ]

								});
							}
				});
