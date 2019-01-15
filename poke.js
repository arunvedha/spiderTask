
var x = document.getElementById('table');
const list = document.querySelector('#history');


const forms = document.forms;
const addForm = forms['submit'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
  const li = document.createElement('li');
  const bookName = document.createElement('span');

  // add text content
  bookName.textContent = value;

  // add classes
  bookName.classList.add('name');

  li.appendChild(bookName);
  list.appendChild(li);

 list.getElementsByTagName('h2').innerHTML = "Recent Searches";

  var HttpClient = function() {
       this.get = function(aUrl, aCallback) {
       var anHttpRequest = new XMLHttpRequest();
       anHttpRequest.onreadystatechange = function() { 
       if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
       aCallback(anHttpRequest.responseText);
      }
   anHttpRequest.open( "GET", aUrl, true ); 
   anHttpRequest.send( null ); 
  }
 }
 var theurl='https://pokeapi.co/api/v2/pokemon/' + value;
 var client = new HttpClient();
 client.get(theurl, function(response) { 
 var response1 = JSON.parse(response).abilities;
 var response2 = JSON.parse(response).held_items;
 var response3 = JSON.parse(response).moves;
 var response4 = JSON.parse(response).height;

 console.log(response2);
 var i;
 var w = document.querySelector('#height'); 
 var x = document.querySelector('#abilities'); 
 var y = document.querySelector('#items');
 var z = document.querySelector('#moves');
 x.innerHTML = y.innerHTML = z.innerHTML= w.innerHTML = " ";
 for(i=0;i<response1.length;i++){
     x.innerHTML+=response1[i].ability.name + "  ";
     if(i!=response1.length-1)
        x.innerHTML+=" ,";
    else
        x.innerHTML+=" ";
 }
 for(i=0;i<response2.length;i++){
     y.innerHTML+=response2[i].item.name ;
     if(i!=response2.length-1)
        y.innerHTML+=" ,";
    else
        y.innerHTML+=" ";
 }
 for(i=0;i<25;i++){
     z.innerHTML+=response3[i].move.name ;
     if(i!=24)
        z.innerHTML+=" ,";
    else
        z.innerHTML+=" ";
 }
 w.innerHTML="    "+response4;
 
});
})







