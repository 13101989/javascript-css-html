			
			var elevi = [];
	
			var indexElev=-1;


			function afisareNote (rand,idx) {

				indexElev=idx;

				var note = document.getElementById("note_elevi_wrapper");
				var grid = document.querySelector(".grid");
				var grid1 = document.querySelector(".grid1");
				var tabel = document.querySelector(".tabel");
				var body = document.querySelector(".body");
				var tabelE = document.getElementById ("tabelE");
				var elev=elevi[indexElev];
				
					
        		var qwerty = elev.note.length === 0;

           			

        			if (qwerty===true) {
						

					var str = `<div id="note_elevi_wrapper">
									<input type="button" value="Ascunde notele" onclick="ascundeNotele(this)" />
									<h2>Note elev: ${elev.nume}</h2>
									<form method="post" onsubmit="adaugaNota(this, event)">
										<fieldset class="numeElev">
											<label for="notaElev">Nota:</label>
											<input type="text" id="notaElev" name="notaElev" />
											<input type="submit" value="Adauga nota" />
										</fieldset>
									</form>
										<fieldset class="numeElev">
											<a href="#" class="link" onclick="sorteazaAscNote()">Sorteaza ascendent notele</a><br />
											<a href="#" class="link" onclick="sorteazaDescNote()">Sorteaza desscendent notele</a>
											<table class="tabel1" id="tabelN">
												<td class="tabel2">Nici o nota adaugata</td>
											</table>
										</fieldset>
								</div>`

						} else {


							var str = `<div id="note_elevi_wrapper">
									<input type="button" value="Ascunde notele" onclick="ascundeNotele(this)" />
									<h2>Note elev: ${elev.nume}</h2>
									<form method="post" onsubmit="adaugaNota(this, event)">
										<fieldset class="numeElev">
											<label for="notaElev">Nota:</label>
											<input type="text" id="notaElev" name="notaElev" />
											<input type="submit" value="Adauga nota" />
										</fieldset>
									</form>
										<fieldset class="numeElev">
											<a href="#" class="link" onclick="sorteazaAscNote()">Sorteaza ascendent notele</a><br />
											<a href="#" class="link" onclick="sorteazaDescNote()">Sorteaza desscendent notele</a>
											<table class="tabel1" id="tabelN">
												<tr>
													<td><strong>Nota</strong></td>
												</tr>`

							for (var i=0; i<elev.note.length; i++) {

							var tabelNote = `	<tr>
													<td>${elev.note[i]}</td>
								                </tr>`

								str += tabelNote;
													
						}}


				
				grid.classList.add("grid1");

				tabel.classList.add("tabel1");

				body.classList.add("body1");


				note.innerHTML = str;
				console.log(note);

			}


			function ascundeNotele (rand) {

				var note = document.getElementById("note_elevi_wrapper");
				var grid = document.querySelector(".grid1");
				var tabel = document.querySelector(".tabel1");
				var body = document.querySelector(".body");

				grid.classList.remove("grid1");
				grid.classList.add("grid");

				tabel.classList.remove("tabel1");
				tabel.classList.add("tabel");

				body.classList.remove("body1");

				note.innerHTML = "";

			}

			function drawElevi () {
				

				var numeElev = document.getElementById ("numeElev");
				var tabelE = document.getElementById ("tabelE");

			
							
					var tabelElevi = `<table class="tabel" id="tabelE">
										<tr>
											<td><strong>Nume</strong></td>
											<td><strong>Medie note</strong></td>
											<td></td>
										</tr>`

				for (var i=0; i<elevi.length; i++) {
					var elev=elevi[i];
					
					if (elev.note.length!==0) {
			
					var str = `	<tr>
									<td>${elev.nume}</td>
									<td>${elev.medie.toFixed(2)}</td>
									<td><input type="button" value="Vezi notele" onclick="afisareNote(this,${i})" /></td>
								</tr>`
					}else{
						var str = `	<tr>
									<td>${elev.nume}</td>
									<td>0</td>
									<td><input type="button" value="Vezi notele" onclick="afisareNote(this,${i})" /></td>
								</tr>`
					}

					
				tabelElevi += str;
				
				}


				tabelE.innerHTML=tabelElevi;
				console.log(elevi);
			
			}


			function adaugaElev (form, event) {
				event.preventDefault();

				var numeElev = document.getElementById ("numeElev");
				var tabelE = document.getElementById ("tabelE");
				var elev=elevi[indexElev];


				elevi.push({
					nume: numeElev.value,
					note: [],
					medie: 0,
				});

							
					var tabelElevi = `<table class="tabel" id="tabelE">
										<tr>
											<td><strong>Nume</strong></td>
											<td><strong>Medie note</strong></td>
											<td></td>
										</tr>`

				for (var i=0; i<elevi.length; i++) {

					var str = `	<tr>
									<td>${elevi[i].nume}</td>
									<td></td>
									<td><input type="button" value="Vezi notele" onclick="afisareNote(this,${i})" /></td>
								</tr>`


				tabelElevi += str;
				numeElev.value="";

				}

				tabelE.innerHTML=tabelElevi;
				console.log(elevi);
				drawElevi ();

			
		}


			function drawNote () {

				var notaElev = document.getElementById ("notaElev");
				var tabelN = document.getElementById ("tabelN");
				var elev=elevi[indexElev];


					var tabelNote = `<table class="tabel1" id="tabelN">
										<tr>
											<td><strong>Nota</strong></td>
										</tr>`

				for (var i=0; i<elev.note.length; i++) {

					var str = `	<tr>
									<td>${elev.note[i]}</td>
								</tr>`


				tabelNote += str;
				notaElev.value="";

			}

				tabelN.innerHTML=tabelNote;

			}


			
			function adaugaNota (form, event) {
				event.preventDefault();

				var notaElev = document.getElementById ("notaElev");
				var tabelN = document.getElementById ("tabelN");
				var elev=elevi[indexElev];


				if (notaElev.value >=0 && notaElev.value <= 10) {


				var x = Math.round(notaElev.value);
				elevi[indexElev].note.push(x);
			}

				console.log(elevi);


					var tabelNote = `<table class="tabel1" id="tabelN">
										<tr>
											<td><strong>Nota</strong></td>
										</tr>`

				for (var i=0; i<elev.note.length; i++) {

					var str = `	<tr>
									<td>${elev.note[i]}</td>
								</tr>`


				tabelNote += str;
				notaElev.value="";

			}

				tabelN.innerHTML=tabelNote;

				var total = 0;
						for(var i = 0; i < elev.note.length; i++) {
    						total += elev.note[i];
						}
						var avg = total / elev.note.length;


				elev.medie=avg;

				drawElevi ();
			
			}

			 function sorteazaAsc() {

			 		var x=elevi[indexElev].nume;

                 	elevi.sort(function(a,b){
						if(a.medie>b.medie){
							return 1;
						}else if(a.medie<b.medie){
							return -1;
						}else{
							return 0;
						}
					});

					for (var i = 0; i < elevi.length; i++) {
						if(elevi[i].nume === x) {
							indexElev=i;
						}
					}

    					
                		drawElevi ();
                	
                }

                 function sorteazaDesc() {

                 	var x=elevi[indexElev].nume;
                 	
                 		sorteazaAsc();
                 	    elevi.reverse();

                 	    for (var i = 0; i < elevi.length; i++) {
						if(elevi[i].nume === x) {
							indexElev=i;
						}
					}
                
                 		
                 		drawElevi ();		
                	
                }

                 function sorteazaAscNote() {

                 	var elev=elevi[indexElev].note;

                 	elev.sort(function(a, b){return a - b});

					drawNote ();
                	
                }

                 function sorteazaDescNote() {

                 	var elev=elevi[indexElev].note;

                 		sorteazaAscNote();
                 	    elev.reverse();

                 		drawNote ();
                	
                }