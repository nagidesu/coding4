document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("menu_border").addEventListener("click",function(){
        this.classList.toggle("border_open");
        document.getElementById("menu").classList.toggle("menu_open")
    });
});

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("menu").addEventListener("click",function(){
        this.classList.remove("menu_open");
        document.getElementById("menu_border").classList.toggle("border_open")
    });
});