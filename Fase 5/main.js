//Resetear al color original cuando clicamos fuera de corazones.
window.addEventListener("click", function (e) {
    if (!document.getElementById("hearts").contains(e.target)){
        var corazones = document.getElementsByClassName('far');
        var arr = Array.prototype.slice.call(corazones);
        for(let i = 0; i < corazones.length; i++){
            arr[i].classList.remove('active');
        } 
    }
})

//Cambiar color al clicar corazón o resetear si el color ya está cambiado.
var change_color = (event) =>{
    var corazones = document.getElementsByClassName('far');
    var arr = Array.prototype.slice.call(corazones)
    var index = arr.indexOf(event);
    for(let i = index; i>= index; i++){
        if(arr[i].className === 'red far fa-heart active'){
            i = index;
            for(let i = index; i>= index; i++){
                arr[i].classList.remove('active');
                }
        }else{
            arr[i].classList.add('active');
        }
    }
}




