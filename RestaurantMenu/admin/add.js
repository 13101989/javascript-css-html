var meniu=null;

				function adauga(form,event){
        		event.preventDefault();

				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				   
				   meniu = JSON.parse(this.responseText);
					console.log(meniu);

					window.location="admin.html";		  
				}
			}

			xhttp.open("POST", "https://restaurant-meniu.firebaseio.com/menu.json", true);
			xhttp.send(JSON.stringify({
					nume: form.querySelector("[name=nume]").value,
					imagine: form.querySelector("[name=URL]").value,
                    ingrediente: form.querySelector("[name=ingrediente]").value,
                    reteta: form.querySelector("[name=reteta]").value,
				}));

			
			}