				function afisareLocatie () {

					var url= "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=Bucharest";

				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var vreme1 = JSON.parse(this.responseText);
					console.log(vreme1);


				var uluru = {lat: 44.43, lng: 26.05};
        			var map = new google.maps.Map(document.getElementById('map'), {
          			zoom: 15,
          			center: uluru
       			 });
        				var marker = new google.maps.Marker({
          				position: uluru,
          					map: map
        			});

        			}
				}
			xhttp.open("GET", url);
			xhttp.send();
			}
					
