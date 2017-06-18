'use strict';
$('#get_data').click(function () {
	$.ajax({
		type: "GET",
		url: "http://rt.ex7.pl/ping",
		dataType: 'json',
		success: function (ping) {
			if (ping.response == "pong") {
				$.ajax({
					type: "POST",
					url: "http://rt.ex7.pl/get-data",
					dataType: 'json',
					success: function (response) {
						var divTable = document.createElement('div');
						divTable.setAttribute('id','tableContainer');
						
						var table = document.createElement('table');
						table.className = "table table-condensed";
						table.setAttribute("id","ajaxTable");
						
						var header = document.createElement('tr');
						header.innerHTML = '<th> ID </th><th> Acronym </th><th> Name </th>';
						header.setAttribute("id", "tableHeader");
						table.appendChild(header);
						
						response.forEach(function (data) {
							var row = document.createElement('tr');
							row.innerHTML = '<td>' + data.id + '</td>' + '<td>' + data.acronym + '</td>' + '<td>' + data.name + '</td>';
							table.append(row);
						});
						divTable.appendChild(table);
						$('#portfolio').append(divTable);
					}
				});
			}
		}
	});
});