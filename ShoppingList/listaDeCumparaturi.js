			var listaCumparaturi = [];
			index = -1;
			
		
                       
             function deseneazaLista() {

				var tabel = document.querySelector("table"); 
				

				var lista = `<thead>
								<tr>
									<td>Item description</td>
									<td>Action</td>
								</tr>
							</thead>`

							for (var i=0; i<listaCumparaturi.length; i++) {

							if (listaCumparaturi[i].check === true) {

							var rand = `<tr>
									<td><strike>${listaCumparaturi[i].produs}</strike></td>
									<td><input type="button" class="markAsBuyed" value="Mark as buyed" onclick="taie(this, ${i})"  /></td>
								</tr>`



						lista += rand;	

						}else {

							var rand = `<tr>
									<td>${listaCumparaturi[i].produs}</td>
									<td><input type="button" class="markAsBuyed" value="Mark as buyed" onclick="taie(this, ${i})"  /></td>
								</tr>`

						lista += rand;	

						}}	


					console.log(lista);
					tabel.innerHTML=lista;                

                }

                function validare(formular, e) {

                        var tabel = document.querySelector("table");
                        var item = document.getElementById("item");

                        
                        e.preventDefault();

   
                          listaCumparaturi.push({
												produs: item.value,
												check: false,
												});
                           
                       
                          document.getElementById("item").value="";


                             deseneazaLista();
                             console.log(listaCumparaturi);                 
                         }


                function taie(rand, idx) {

                	index = idx; 

                	var s=rand.parentNode.parentNode.rowIndex;

                	if (listaCumparaturi[index].check === false) {
                		listaCumparaturi[index].check = true;
                	}else{
                		listaCumparaturi[index].check = false;
                	}

                	

                	deseneazaLista();

                	console.log(listaCumparaturi);
                
                }


                 function sorteazaAsc() {

                 	
                 	listaCumparaturi.sort(function(a,b){
						if(a.produs>b.produs){
							return 1;
						}else if(a.produs<b.produs){
							return -1;
						}else{
							return 0;
						}
					});

                	
                		deseneazaLista();
                		
                	
                }

                 function sorteazaDesc() {
                 	
                 		sorteazaAsc();
                 		listaCumparaturi.reverse();
                
                 		
                 		deseneazaLista(); 
                 		console.log(listaCumparaturi);		
                	
                }

