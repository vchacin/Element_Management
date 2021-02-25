window.addEventListener('scroll', function(){

    function aparece (direccion){
    
        let animado = document.querySelectorAll(".anima_" + direccion);
        let scrollTop = document.documentElement.scrollTop;

        for (var i =0; i<animado.length; i++) {
            let alturaAnimado = animado[i].offsetTop;
            if (alturaAnimado - 400 < scrollTop) {
                animado[i].style.opacity = 1;
                animado[i].classList.add("mostrar_" + direccion);
            }
         }
    }

aparece("up");
aparece("right");


});
