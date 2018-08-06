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
				for  (var count =0; count < contact_data.length; count++)
				{
					table_data += "<tr>";
					var cell_data = contact_data[count];
					for (var cell_count = 0; cell_count < cell_data.length)
					{
						if(count === 0)
						{
							table_data += "<th>" + cell_data[cell_count] + "</th>";
						}
						else
						{
							table_data += "<td>" + cell_data[cell_count] + "</td>";
						}
					}
					table_data += "</tr>";
				}
			}

		})

	});



});