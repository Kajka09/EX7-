$('#get_data').click(
	function(){
    'use strict';
		$.ajax({
            type:"POST",
            url: "http://rt.ex7.pl/get-data",
            dataType: 'json',
            success: function(response){
				var table = document.createElement('table');
				table.className="table table-condensed";
				
				var header = document.createElement('tr');
				
				header.innerHTML = '<th> ID </th><th> Acronym </th><th> Name </th>';
				
				table.appendChild(header);
				response.forEach(function(data){
					var row = document.createElement('tr');
					
					row.innerHTML = '<td>'+data.id+'</td>'+'<td>'+data.acronym + '</td>'+ '<td>'+data.name+'</td>';
					table.append(row);
				});
				
            	$('#portfolio').append(table);
			}
        });
		
	}
); 