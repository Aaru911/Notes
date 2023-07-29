function start(){

  var list = document.getElementById('lists');
  var count=localStorage.getItem("count");
  var old=localStorage.getItem("Notes");
  const myArray = old.split("/");
  console.log(myArray);

  for(var i=0;i<count;i++){
    list.innerHTML+=`<a href="note.html" class="w3-bar-item w3-button" id=${myArray[i]}>${myArray[i]}</a> `;
    //list.innerHTML+='<a href="note.html" class="w3-bar-item w3-button" id="note'+i+'">'+myArray[i]+'</a>';
  }

}

function addnote(){
  var txt=document.getElementById("input-field");
  var count=localStorage.getItem("count");
  var old=localStorage.getItem("Notes");
  if(old==null){
    count++;
    localStorage.setItem("count", count);
    localStorage.setItem("Notes",txt.value);
    window.location.href = "/index.html";
  }
  else{
    count++;
    localStorage.setItem("count", count);
    localStorage.setItem("Notes",old+"/"+txt.value);
    window.location.href = "/index.html";
  }
  
}