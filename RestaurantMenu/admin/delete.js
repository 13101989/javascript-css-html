				var meniu=null;
				function sterge(){
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				   
				   preparat = JSON.parse(this.responseText);
					console.log(preparat);
					window.location="admin.html";   
				  
					}
				}
			var id = window.location.search.substring(4);
			xhttp.open("DELETE", "https://restaurant-meniu.firebaseio.com/menu/"+id+".json", true);
			xhttp.send();
			}

			function nuSterge(){
            window.location = "admin.html";
        }

        	function preparat(){
        		var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				   
				   preparat = JSON.parse(this.responseText);
					console.log(preparat);
					var rand = `<h4>Esti pe cale sa stergi preparatul: "${preparat.nume}"</h4>`
					document.getElementById("preparatdeSters").innerHTML= rand;
				  
					}
				}
			var id = window.location.search.substring(4);
			xhttp.open("GET", "https://restaurant-meniu.firebaseio.com/menu/"+id+".json", true);
			xhttp.send();
			
        	}
