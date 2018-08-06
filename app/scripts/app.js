$(document).ready(function () {
	$("#sub").click(function (event) {
		event.preventDefault();

		var userData = {
			username: "mohammadzainabbas@gmail.com",
			password: "zain123"
		};
		$.ajax({
			url: 'http://localhost:8080/qrapi/api/v1/login',
			type: 'POST',
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data: JSON.stringify(userData),

			success: function (res) {
				alert("Username and password is correct" + res);
			},
			error: function (data) {
				alert("wrong username or password");
			}
		});
	});

	$("#Load_Data").click(function (event){

		$.ajax({
			url:"localhost:8080/qrapi/api/v1/contacts/all",
			type:"GET",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success:function(contact_data)
			{
				var table_data = '<table class="table table-bordered table-striped">';
				table_data += '<tr class = "table-header header">';
				table_data += '<th> Contact ID </th>';
				table_data += '<th> First Name </th>';
				table_data += '<th> Last Name </th>';
				table_data += '<th> Email </th>';
				table_data += '<th> Gender </th>';
				table_data += '<th> Phone Number </th>';
				table_data += '<th> Status </th>';
				table_data += '<th> Address ID </th>';

				// table_data += '<th> Street </th>';
				// table_data += '<th> City </th>';
				// table_data += '<th> Province </th>';
				// table_data += '<th> Country </th>';

				table_data += '</tr>';
				
				$.each(data, function(key, value){
					table_data += '<td> data[key]["Id"] </td>';
					table_data += '<td> data[key]["First_Name"] </td>';
					table_data += '<td> data[key]["Last_Name"] </td>';
					table_data += '<td> data[key]["Email"] </td>';
					table_data += '<td> data[key]["Gender"] </td>';
					table_data += '<td> data[key]["Phone_Number"] </td>';
					table_data += '<td> data[key]["Contact_Status"] </td>';
					table_data += '<td> data[key]["Address_Id"] </td>';
					
					// table_data += '<td> data[key][""] </td>';
					// table_data += '<td> data[key][""] </td>';
					// table_data += '<td> data[key][""] </td>';
					// table_data += '<td> data[key][""] </td>';

				});

				$("body").append(table_data);
				

			}

		})

	});



});