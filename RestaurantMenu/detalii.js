				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				   
				   var detalii = JSON.parse(this.responseText);
				   console.log(detalii);
				   
				   	document.getElementById("nume").innerHTML = detalii.nume;
                	document.getElementById("img").src = detalii.imagine;
               	 	document.getElementById("ingrediente").innerHTML = detalii.ingrediente;
                	document.getElementById("reteta").innerHTML = detalii.reteta;
				}
			}
			var id = window.location.search.substring(4);
			xhttp.open("GET", "https://restaurant-menu-v1.firebaseio.com/menu/"+ id +".json", true);
			xhttp.send();
					