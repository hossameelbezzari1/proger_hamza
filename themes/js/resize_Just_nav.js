
resize_nav();

window.onresize = function(){
    resize_nav();
}


function resize_nav(){
    var _menu1 = document.getElementById("_menu1"),
     _btnMenu = document.getElementById("btnMenu"),
     _menu2 = document.getElementById("_menu2");
    
    if(window.innerWidth > 1000){
        _menu1.style.display = "flex";
        _menu2.style.display = "block";
        _btnMenu.style.display = "none";
    }else{
        _menu1.style.display = "none";
        _menu2.style.display = "none";
        _btnMenu.style.display = "block";
    }

}