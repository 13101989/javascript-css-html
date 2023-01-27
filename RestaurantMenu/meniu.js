				var meniu=null;
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				   
				   meniu = JSON.parse(this.responseText);
				   
				   deseneazaMeniu();
				}
			}
			xhttp.open("GET", "https://restaurant-menu-v1.firebaseio.com/.json", true);
			xhttp.send();

			function deseneazaMeniu(){
        event.preventDefault();

        var meniuTabel=document.getElementById("tabel2");

				console.log(meniu);

				var str="";
				   for(var i in meniu.menu){
				       console.log(i, meniu.menu[i]);

				       if(document.getElementById("cautaIngrediente").value!=='' && meniu.menu[i].ingrediente.indexOf(document.getElementById("cautaIngrediente").value)===-1)
                       {
                          continue; 
                       }
					  var rand = `<tr>
		 								   <td id="poza"><img src="${meniu.menu[i].imagine}" /></td>
		 								   <td id="descriere"><strong>${meniu.menu[i].nume}</strong><br />${meniu.menu[i].ingrediente}</td>
		 								   <td id="tdDetalii"><a href="detalii.html?id=${i}"><input type="button" id="detalii" value="DETALII" /></a></td>
		 							  </tr>`;

					str+=rand;
				  meniuTabel.innerHTML=str;
					}
            
				}
					