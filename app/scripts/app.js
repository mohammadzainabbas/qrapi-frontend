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
});