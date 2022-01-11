
let inputSearch = document.querySelector("#input-search");
let btnBuscar = document.querySelector("#btn-buscar");
let imgShow = document.querySelector('.img');
let body = document.querySelector('body');
btnBuscar.addEventListener("click",()=>{

  if(isNaN(inputSearch.value)){
    let div = document.createElement("div");
    let btnClose = document.createElement('button');
    btnClose.innerHTML = "X";
    btnClose.classList.add('btnClose1');
    div.innerHTML = `${"El campo no puede contener"}<br>${"letras"}`;
    div.classList.add("alert-mensaje");
    div.appendChild(btnClose);
    body.appendChild(div);
    inputSearch.value = ""; 
    btnClose.addEventListener("click",()=>{
      body.removeChild(div);
    })
}else if(inputSearch.value == ""){
  
    let div2 = document.createElement("div");
    let btnClose2 = document.createElement('button');
    btnClose2.innerHTML = "X";
    btnClose2.classList.add('btnClose2');
    div2.innerHTML = `${"El campo no puede estar"}<br>${"vacio"}`;
    div2.classList.add("alert-mensaje");
    div2.appendChild(btnClose2);
    body.appendChild(div2);
    inputSearch.value = ""; 
    btnClose2.addEventListener("click",()=>{
      body.removeChild(div2);
    })
  inputSearch.value = ""; 

}



const url = "https://jsonplaceholder.typicode.com/photos";
fetch(url)
.then(data => data.json())
.then(show=>{
  show.forEach((foto)=>{
    
  
     if(foto.id == inputSearch.value){
      
      let btnDelete = document.createElement('button');
      btnDelete.innerHTML = "X";
      btnDelete.classList.add("btnDelete");
      let img = document.createElement("img");
      img.src = foto.thumbnailUrl;
      imgShow.appendChild(img);
      imgShow.appendChild(btnDelete);
      inputSearch.value = "";
  
      btnDelete.addEventListener("click",()=>{
        imgShow.removeChild(img);
        btnDelete.style.display = "none";
      })
    }
  })
})
.catch(err=>{
  console.log(err)
})
})
