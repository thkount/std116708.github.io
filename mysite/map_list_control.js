/*    
	@licstart  The following is the entire license notice for the 
	JavaScript code in this page.

	Copyright (C) 2014  
	Konstantinos Grammatikakis, Electronic and Computer Engineer, 
	sparkaf11@gmail.com

	The JavaScript code in this page is free software: you can
	redistribute it and/or modify it under the terms of the GNU
	General Public License (GNU GPL) as published by the Free Software
	Foundation, either version 3 of the License, or (at your option)
	any later version.  The code is distributed WITHOUT ANY WARRANTY;
	without even the implied warranty of MERCHANTABILITY or FITNESS
	FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

	As additional permission under GNU GPL version 3 section 7, you
	may distribute non-source (e.g., minimized or compacted) forms of
	that code without the copy of the GNU GPL normally required by
	section 4, provided you include this license notice and a URL
	through which recipients can access the Corresponding Source.   


	@licend  The above is the entire license notice
	for the JavaScript code in this page.
*/
		
// Na min ksexasw : 
//-------------------
// Na ginei to if gia ta onomata dimwn 
var elm; 
 var markerArray = []; // parallilos pinakas me pinaka polygonCoords[]
 var infoWindowsArray = []; // parallilos pinakas me pinaka polygonCoords[]
 
 var markersByMuni = []; //krataei ta apotelesmata anazitisis ana dimo 
 
 // paralliloι pinakes me pinaka markersByMuni
 var infoWindowsByMuni = []; 
 var oikismoiByMuni = []; //krataei ta onomata oikismwn anazitisis ana dimo 
 var perigrafesByMuni = []; //krataei tin perigrafi oikismwn anazitisis ana dimo 
 
 
 var lastInfoWin; 
 var lastSelElem; 
 var map; 
 
 
function initialize() {
	document.getElementById("epoikism").innerHTML = '<span></span>'; 
	document.getElementById("selectable").innerHTML = " "; 
	
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(35.160009, 25.132493),
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  var irakleio1;
  var irakleio2;
  var polygonAreaArray = []; //Krataei ola ta polygona typou "polygonObj" twn xwrwn katavlismwn
  
  var infoWinArray = [];
  
  var polygonObj = {
    paths: [],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  }; 
  
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  
	for (var i=0; i < polygonCoords.length; i++){
		
		polygonObj.paths = polygonCoords[i].paths; 
		polygonAreaArray.push(polygonObj);
		
		
	  
		var polyg = new google.maps.Polygon(polygonAreaArray[i]);
			polyg.setMap(map);
			
		 //create an info window 
		 //  var myInfowindow  = new google.maps.InfoWindow({
		//	  content: "<div><b>Χώρος Καταυλισμού:</b><P></P>"+polygonCoords[i].perigrafi+"</div>"
		 // });
		  
		/* insert markers at the top left point of the Area */
		var marker = new google.maps.Marker({
			  position: polygonAreaArray[i].paths[0],
			  map: map
			 
		});
		
		var infowin = new google.maps.InfoWindow({
			content: "<div class = 'infoWin' ><div>"+"<h3>"+polygonCoords[i].perigrafi+"</h3>"+"</div>"+
			"<div>"+"<b>Δήμος: </b>"+getGreekNames(polygonCoords[i].dimos)+"</div>"+
			"<div>"+"<b>Οικισμός: </b>"+polygonCoords[i].oikismos+"</div></div>"
			
		});
  
		infoWindowsArray.push(infowin); 
 
		marker.setTitle(polygonCoords[i].perigrafi);
		
		attachInfoWinDetachLast(infowin, marker); 
		attachInfoWinDetachLast(infowin, polyg); 
		markerArray.push(marker)
		
		
	}
  
  
  /* console.log(polygonAreaArray[i].paths[0]);
  
 var zoom = map.getZoom();
 marker.setVisible(zoom <=12);
  */
		google.maps.event.addListener(map, 'click', function() {
			if(lastInfoWin)
				lastInfoWin.close();
			if(lastSelElem)
				lastSelElem.className = "notSelected";

		}); 
}




function attachInfoWinDetachLast(infowindow, objective) {
	
  google.maps.event.addListener(objective, 'click', function() {
	var pos; 
	
	
	try
	{
		//Run some code here
		// edw to objective einai marker
		pos = objective.getPosition(); 
	}
	catch(err)
	{
		// edw to objective einai polygon
		console.log(err+objective.getPath().getAt(0));
		//Handle errors here
		pos = objective.getPath().getAt(0);
		
	}
	
	if (lastInfoWin)
		lastInfoWin.close();
	if(lastSelElem)
		lastSelElem.className = "notSelected";
		
    infowindow.open(objective.get('map'));
	infowindow.setPosition(pos);
	lastInfoWin = infowindow;
	
  });
}

/* Edw tha ginetai to search me key onomaDimou*/ 
function searchMunicipalityCamps(onomaDimou){
	var plithos = 0; 
	document.getElementById("epoikism").innerHTML = '<span>Επιλέξτε Οικισμό:</span>'; 
	//console.log("searchMunicipalityCamps: "+onomaDimou);
	setMarkersOnMap(null, markerArray); //clear the map 
	markersByMuni = []; //clear the last searched results  
	oikismoiByMuni = []; //clear the last searched results  
	perigrafesByMuni = []; //clear the last searched results  
	infoWindowsByMuni = []; //clear the last searched results  
	
	for (var i=0; i < polygonCoords.length; i++){
	
		if(polygonCoords[i].dimos == onomaDimou){
			markersByMuni.push(markerArray[i]);
			oikismoiByMuni.push(polygonCoords[i].oikismos);
			perigrafesByMuni.push(polygonCoords[i].perigrafi);
			infoWindowsByMuni.push(infoWindowsArray[i]);
			plithos++; 
		}
		
		
	}
	
	console.log("searchMunicipalityCamps: "+onomaDimou+" "+ plithos);
	setMarkersOnMap(map, markersByMuni);//set search result markers on map 
	createShelterAreaList(perigrafesByMuni, oikismoiByMuni, infoWindowsByMuni);
}

function getMunicipality()
{
	var mylist=document.getElementById("epilogiDimou");
	console.log(mylist.options[mylist.selectedIndex].value);
	setMapZoomCentre(11, syntetDimwn[mylist.options[mylist.selectedIndex].value])
	if(mylist.options[mylist.selectedIndex].value == "init")
		initialize();
	else
		searchMunicipalityCamps(mylist.options[mylist.selectedIndex].value);
		
	
	
}

function setMapZoomCentre(zoom, centre){
	console.log("zoom:"+zoom);
	console.log("center:"+centre);
	map.panTo(centre);
	map.setZoom(zoom);
}

// Sets the map on all markers in the array.
function setMarkersOnMap(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// [{coords: [], name: ""}, {}, {}]
// var myArObj = [{name: "Kostas", coords: [1, 2, 3]}, {name: "Giorgos", coords: [3, 2, 1]}]
//
//




function getGreekNames(name){

	if(name == "archanwn")
		return "Αρχανών";
	else if (name == "viannou")  
		return "Βιάννου";
	else if (name == "gortinas")  
		return "Γόρτυνας";
	else if (name == "irakleiou")  
		return "Ηρακλείου";
	else if (name == "maleviziou")  
		return "Μαλεβιζίου";
	else if (name == "minwa")  
		return "Μινώα";	
	else if (name == "faistoy")  
		return "Φαιστού";		
	else if (name == "xersonisou")  
		return "Χερσονήσου";	
		
			else;
}
function listItem(element){
//var lst = document.getElementById("selectable")
//lst.childNodes[1].innerText = "Kostas"
	var thesi = markersByMuni[element.id].getPosition();
	
	if(lastSelElem)
		lastSelElem.className = "notSelected";
		
		
	console.log(element);
	element.className = "selected";
	
	map.panTo(thesi);
	
	if(lastInfoWin)
		lastInfoWin.close();
		
	infoWindowsByMuni[element.id].open(map);
	infoWindowsByMuni[element.id].setPosition(thesi);
	lastInfoWin = infoWindowsByMuni[element.id];
	
	lastSelElem = element; 
}

function clearListElemens(element){
	element.innerHTML = "";	
}

function createShelterAreaList(perigrafes, oikismoi, infow){
	var str = "";
	clearListElemens(document.getElementById("selectable")); // Katharise ti lista xwrwn katavl
	
	for (var i = 0; i < perigrafes.length; i++) {
		console.log(i + 1 + "." + oikismoi[i] + "->"+ perigrafes[i] ); 
		
		str += '<li id = "'+i
		+'" class="notSelected" onclick = "listItem(this)">'
		+(i+1) +'. ' + oikismoi[i] 
		+'</li>';//+ '-' + perigrafes[i]+'</li>';
	}
	//str = "<li>kostas</li>";
	document.getElementById("selectable").innerHTML = str;
}

google.maps.event.addDomListener(window, 'load', initialize);