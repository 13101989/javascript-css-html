var meniu=null;
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				   
				   meniu = JSON.parse(this.responseText);
				   
				   deseneazaMeniu();
				}
			}
			xhttp.open("GET", "https://restaurant-meniu.firebaseio.com/.json", true);
			xhttp.send();

		

			setTimeout(function deseneazaMeniu(){
        		//event.preventDefault();

       		    var meniuTabel=document.getElementById("tabel2");

				console.log(meniu);

				var str="";
				   for(var i in meniu.menu){
				       console.log(i, meniu.menu[i]);

					  var rand = `<tr>
		 								   <td id="poza"><img src="${meniu.menu[i].imagine}" /></td>
		 								   <td id="descriere"><strong>${meniu.menu[i].nume}</strong><br />${meniu.menu[i].ingrediente}</td>
		 								   <td id="tdDetalii"><a href="edit.html?id=${i}"><input type="button" id="contact" value="MODIFICA" /></a>&nbsp;<a href="delete.html?id=${i}"><input type="button" id="detalii" value="STERGE" /></a></td>
		 							  </tr>`;

					str+=rand;
				  meniuTabel.innerHTML=str;
				  document.querySelector(".container").style.display="none";
					document.querySelector(".item").style.display="none";
					document.querySelector(".item-1").style.display="none";
					document.querySelector(".item-2").style.display="none";
					document.querySelector(".item-3").style.display="none";
					document.querySelector(".item-4").style.display="none";

					}
            
				},2000);

				function x(){
					document.querySelector(".container").style.display="block";
					document.querySelector(".item").style.display="block";
					document.querySelector(".item-1").style.display="block";
					document.querySelector(".item-2").style.display="block";
					document.querySelector(".item-3").style.display="block";
					document.querySelector(".item-4").style.display="block";

				}
