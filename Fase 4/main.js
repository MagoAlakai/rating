var change_color = (event) =>{
    var corazones = document.getElementsByClassName('far');
    var arr = Array.prototype.slice.call(corazones)
    var index = arr.indexOf(event);
    console.log(corazones);
    console.log(index);
    for(let i = 0; i<= index; i++){
        arr[i].classList.add('active');
    }
}

