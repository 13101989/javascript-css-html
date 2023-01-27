				var meniu=null;

				function edit(){

				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				   
				   meniu = JSON.parse(this.responseText);
					console.log(meniu);  

					document.querySelector("[name=nume]").value = meniu.nume;
					document.querySelector("[name=URL]").value = meniu.imagine;
                    document.querySelector("[name=ingrediente]").value = meniu.ingrediente;
                    document.querySelector("[name=reteta]").value = meniu.reteta;
				  
				}
			}
			var id = window.location.search.substring(4);
			xhttp.open("GET", "https://restaurant-meniu.firebaseio.com/menu/"+id+".json", true);
			xhttp.send();
			}

			function salveazaPreparat(form,event){
				event.preventDefault();

				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {

					
					window.location="admin.html";
					
				}
			}
			var id = window.location.search.substring(4);
			xhttp.open("PUT", "https://restaurant-meniu.firebaseio.com/menu/"+id+".json", true);
			xhttp.send(JSON.stringify({
					nume: form.querySelector("[name=nume]").value,
					imagine: form.querySelector("[name=URL]").value,
                    ingrediente: form.querySelector("[name=ingrediente]").value,
                    reteta: form.querySelector("[name=reteta]").value,
				}));
			}