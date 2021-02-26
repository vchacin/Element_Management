$(function() {

    var headerNav1 = "Inicio";
    var headerNav2 = "Nosotros";
    var headerNav3 = "Servicios";
    var headerNav4 = "Ubicación";
    var headerNav5 = "Contacto";
    var headerDiv1 = "Cuidamos cada elemento <br/> de tu patrimonio";
    var mainNosotros1 = "SOBRE NOSOTROS";
    var mainNosotros2 = "SOMOS UNA EMPRESA ESPECIALIZADA EN LA <span class='font-bold'>ADMINISTRACIÓN PROFESIONAL E INTEGRAL DE CONDOMINIOS</span> EN LA RIVIERA MAYA; FOCALIZANDO ESFUERZOS PARA MANTENER EN ÓPTIMAS CONDICIONES LAS ÁREAS COMUNES Y AMENIDADES DE LOS MISMOS, LOGRANDO EL BUEN FUNCIONAMIENTO DE CADA UNA DE LAS INSTALACIONES DE SU PROPIEDAD.";
    var mainQuote1 = "UNA BUENA ADMINISTRACIÓN ES IGUAL A <span class='font-semibold'>UN INMUEBLE EN OPTIMAS CONDICIONES CON ALTA PLUSVALÍA</span>";
    var mainServicios1 = "SERVICIOS";
    var mainServicios2 = "EXPERTOS EN ADMINISTRACIÓN";
    var mainServicios3 = "Talento y capital humano";
    var mainServicios4 = "Gestión económica eficaz";
    var mainServicios5 = "Generación de valor y calidad";
    var mainServicios6 = "Planificación, dirección y control";
    var mainServicios7 = "TECNOLOGÍA AVANZADA";
    var mainServicios8 = "Procesos eficientes";
    var mainServicios9 = "Seguridad y transparencia";
    var mainServicios10 = "Técnicas innovadoras";
    var mainServicios11 = "Buen manejo de ingresos";
    var mainServicios12 = "SOPORTE 24/7";
    var mainServicios13 = "Atención personalizada";
    var mainServicios14 = "Solucionamos problemas";
    var mainServicios15 = "Operativos";
    var mainServicios16 = "Administrativos";
    var mainServicios17 = "Conflictos";
    var mainServicios18 = "Difusión de Información";
    var mainServicios19 = "Supervisión del Inmueble";
    var mainServicios20 = "Reparación de Componentes";
    var mainServicios21 = "PROVEEDORES EXPERTOS";
    var mainServicios22 = "Trabajo en equipo";
    var mainServicios23 = "Alianzas profesionales";
    var mainServicios24 = "Talento local";
    var mainMision1 = "MISIÓN";
    var mainMision2 = "SER LA EMPRESA LÍDER DE LA REGIÓN, RECONOCIDA POR NUESTRO SERVICIO DE ALTA CALIDAD Y TECNOLOGÍA APLICADA AL DESARROLLO COTIDIANO DE LA PROPIEDAD CON SEGUIMIENTO PERSONALIZADO DE CADA PROPIETARIO O ADMINISTRADOR, ASEGURANDO SU PATRIMONIO Y SATISFACCIÓN GLOBAL.";
    var mainMision3 = "GUIADA POR LA TRANSPARENCIA, INTEGRIDAD, SOLIDARIDAD, RESPONSABILIDAD Y SEGURIDAD SOCIAL.";
    var mainMision4 = "VISIÓN";
    var mainMision5 = "LIDERAR EL MERCADO DE LA ADMINISTRACIÓN CONDO-HOTELERA EN LA REGIÓN POR NUESTROS PROCESOS TECNOLÓGICOS, TRANSPARENTES Y EFECTIVOS.";
    var mainMision6 = "GARANTIZANDO UN SERVICIO ÓPTIMO EN CADA ELEMENTO DEL INMUEBLE DE NUESTROS CLIENTES.";
    var mainEsquema1 = "NUESTRO MÉTODO";
    var mainEsquema2 = "ANÁLISIS";
    var mainEsquema3 = "NECESIDADES, FORTALEZAS Y OPORTUNIDADES.";
    var mainEsquema4 = "PROPUESTA";
    var mainEsquema5 = '“NO SON SOLO NÚMEROS, HAY QUE DARLES VALOR”.';
    var mainEsquema6 = "APLICACIÓN";
    var mainEsquema7 = "PLAN DE ACCIÓN ACORDE AL CONDOMINIO.";
    var mainEsquema8 = "RESIDENTES";
    var mainEsquema9 = "BUENA COMUNICACIÓN Y SEGUIMIENTO.";
    var mainBeneficios1 = "BENEFICIOS";
    var mainBeneficios2 = "SOLUCIONES INTEGRALES";
    var mainBeneficios3 = "ACCESO A LA INFORMACIÓN EN TIEMPO REAL Y SOLUCIÓN DE PROBLEMAS INMEDIATOS.";
    var mainBeneficios4 = "CONTACTO Y ASESORIA";
    var mainBeneficios5 = "NÚMEROS DE CONTACTO DIRECTO A SU DISPOSICIÓN PARA EMERGENCIAS Y ASESORÍA LEGAL.";
    var mainBeneficios6 = "ÓPTIMAS CONDICIONES";
    var mainBeneficios7 = "ENFOCADOS EN MANTENER EN ÓPTIMAS CONDICIONES LAS ÁREAS COMUNES Y AMENIDADES.";
    var mainUbicacion1 = "UBICACIÓN";
    var mainUbicacion2 = "ESTAMOS EN LA <span class='font-bold'>RIVIERA MAYA, MÉXICO</span>";
    var mainContact1 = "¿LISTO PARA EMPEZAR? <br/> LLÁMANOS Y MEJORA LA CALIDAD DE VIDA EN TU CONDOMINIO.";
    var mainContact2 = '<label class="tracking-wide text-xs font-bold mb-2" for="name">NOMBRE</label><input class="w-full bg-gray-200 border border-gray-200 px-4 py-2 mb-2" id="name" type="text" placeholder="Ingresa tu nombre">';
    var mainContact3 = "TELÉFONO";
    var mainContact4 = '<label class="tracking-wide text-xs font-bold mb-2" for="email">EMAIL</label><input class="w-full bg-gray-200 border border-gray-200 px-4 py-2" id="email" type="email" placeholder="Ingresa tu email">';
    var mainContact5 = "UNIDADES HABITACIONALES";
    var mainContact6 = "30 o más";
    var mainContact7 = "CIUDAD";
    var mainContact8 = '<label class="tracking-wide text-xs font-bold mb-2" for="hab">COMENTARIO</label><div><textarea class="w-full bg-gray-200 border border-gray-200 px-4 py-2 mb-2 resize-none" id="comentario" type="text" placeholder="Déjanos algún comentario"></textarea></div>';
    var mainContact9 = "Enviar";
    var footer1 = "Privacidad"; 

    switch(userLocation) {
        case "CL": 
            headerNav1 = LANG.HEADER.NAVBAR.TEXTO1.EN;
            headerNav2 = LANG.HEADER.NAVBAR.TEXTO2.EN;
            headerNav3 = LANG.HEADER.NAVBAR.TEXTO3.EN;
            headerNav4 = LANG.HEADER.NAVBAR.TEXTO4.EN;
            headerNav5 = LANG.HEADER.NAVBAR.TEXTO5.EN;
            headerDiv1 = LANG.HEADER.DIV.TEXTO1.EN;
            mainNosotros1 = LANG.MAIN.NOSOTROS.TEXT1.EN;
            mainNosotros2 = LANG.MAIN.NOSOTROS.TEXT2.EN;
            mainQuote1 = LANG.MAIN.QUOTE.TEXT1.EN;
            mainServicios1 = LANG.MAIN.SERVICIOS.TEXT1.EN;
            mainServicios2 = LANG.MAIN.SERVICIOS.TEXT2.EN;
            mainServicios3 = LANG.MAIN.SERVICIOS.TEXT3.EN;
            mainServicios4 = LANG.MAIN.SERVICIOS.TEXT4.EN;
            mainServicios5 = LANG.MAIN.SERVICIOS.TEXT5.EN;
            mainServicios6 = LANG.MAIN.SERVICIOS.TEXT6.EN;
            mainServicios7 = LANG.MAIN.SERVICIOS.TEXT7.EN;
            mainServicios8 = LANG.MAIN.SERVICIOS.TEXT8.EN;
            mainServicios9 = LANG.MAIN.SERVICIOS.TEXT9.EN;
            mainServicios10 = LANG.MAIN.SERVICIOS.TEXT10.EN;
            mainServicios11 = LANG.MAIN.SERVICIOS.TEXT11.EN;
            mainServicios12 = LANG.MAIN.SERVICIOS.TEXT12.EN;
            mainServicios13 = LANG.MAIN.SERVICIOS.TEXT13.EN;
            mainServicios14 = LANG.MAIN.SERVICIOS.TEXT14.EN;
            mainServicios15 = LANG.MAIN.SERVICIOS.TEXT15.EN;
            mainServicios16 = LANG.MAIN.SERVICIOS.TEXT16.EN;
            mainServicios17 = LANG.MAIN.SERVICIOS.TEXT17.EN;
            mainServicios18 = LANG.MAIN.SERVICIOS.TEXT18.EN;
            mainServicios19 = LANG.MAIN.SERVICIOS.TEXT19.EN;
            mainServicios20 = LANG.MAIN.SERVICIOS.TEXT20.EN;
            mainServicios21 = LANG.MAIN.SERVICIOS.TEXT21.EN;
            mainServicios22 = LANG.MAIN.SERVICIOS.TEXT22.EN;
            mainServicios23 = LANG.MAIN.SERVICIOS.TEXT23.EN;
            mainServicios24 = LANG.MAIN.SERVICIOS.TEXT24.EN;
            mainMision1 = LANG.MAIN.MISION.TEXT1.EN;
            mainMision2 = LANG.MAIN.MISION.TEXT2.EN;
            mainMision3 = LANG.MAIN.MISION.TEXT3.EN;
            mainMision4 = LANG.MAIN.MISION.TEXT4.EN;
            mainMision5 = LANG.MAIN.MISION.TEXT5.EN;
            mainMision6 = LANG.MAIN.MISION.TEXT6.EN;
            mainEsquema1 = LANG.MAIN.ESQUEMA.TEXT1.EN;
            mainEsquema2 = LANG.MAIN.ESQUEMA.TEXT2.EN;
            mainEsquema3 = LANG.MAIN.ESQUEMA.TEXT3.EN;
            mainEsquema4 = LANG.MAIN.ESQUEMA.TEXT4.EN;
            mainEsquema5 = LANG.MAIN.ESQUEMA.TEXT5.EN;
            mainEsquema6 = LANG.MAIN.ESQUEMA.TEXT6.EN;
            mainEsquema7 = LANG.MAIN.ESQUEMA.TEXT7.EN;
            mainEsquema8 = LANG.MAIN.ESQUEMA.TEXT8.EN;
            mainEsquema9 = LANG.MAIN.ESQUEMA.TEXT9.EN;
            mainBeneficios1 = LANG.MAIN.BENEFICIOS.TEXT1.EN;
            mainBeneficios2 = LANG.MAIN.BENEFICIOS.TEXT2.EN;
            mainBeneficios3 = LANG.MAIN.BENEFICIOS.TEXT3.EN;
            mainBeneficios4 = LANG.MAIN.BENEFICIOS.TEXT4.EN;
            mainBeneficios5 = LANG.MAIN.BENEFICIOS.TEXT5.EN;
            mainBeneficios6 = LANG.MAIN.BENEFICIOS.TEXT6.EN;
            mainBeneficios7 = LANG.MAIN.BENEFICIOS.TEXT7.EN;
            mainUbicacion1 = LANG.MAIN.UBICACION.TEXT1.EN;
            mainUbicacion2 = LANG.MAIN.UBICACION.TEXT2.EN;
            mainContact1 = LANG.MAIN.CONTACT.TEXT1.EN;
            mainContact2 = LANG.MAIN.CONTACT.TEXT2.EN;
            mainContact3 = LANG.MAIN.CONTACT.TEXT3.EN;
            mainContact4 = LANG.MAIN.CONTACT.TEXT4.EN;
            mainContact5 = LANG.MAIN.CONTACT.TEXT5.EN;
            mainContact6 = LANG.MAIN.CONTACT.TEXT6.EN;
            mainContact7 = LANG.MAIN.CONTACT.TEXT7.EN;
            mainContact8 = LANG.MAIN.CONTACT.TEXT8.EN;
            mainContact9 = LANG.MAIN.CONTACT.TEXT9.EN;
            footer1 = LANG.MAIN.FOOTER.TEXT1.EN;
            
            break;
        default:
            rect = bannerRecMexico;
            vert = bannerVerMexico;
            url = hrefMexico;
            break;
    }

    $("#hnav1").html(headerNav1);
    $("#hnav2").html(headerNav2);
    $("#hnav3").html(headerNav3);
    $("#hnav4").html(headerNav4);
    $("#hnav5").html(headerNav5);
    $("#hdiv1").html(headerDiv1);
    $("#mnosotros1").html(mainNosotros1);
    $("#mnosotros2").html(mainNosotros2);
    $("#mquote1").html(mainQuote1);
    $("#mservicios1").html(mainServicios1);
    $("#mservicios2").html(mainServicios2);
    $("#mservicios3").html(mainServicios3);
    $("#mservicios4").html(mainServicios4);
    $("#mservicios5").html(mainServicios5);
    $("#mservicios6").html(mainServicios6);
    $("#mservicios7").html(mainServicios7);
    $("#mservicios8").html(mainServicios8);
    $("#mservicios9").html(mainServicios9);
    $("#mservicios10").html(mainServicios10);
    $("#mservicios11").html(mainServicios11);
    $("#mservicios12").html(mainServicios12);
    $("#mservicios13").html(mainServicios13);
    $("#mservicios14").html(mainServicios14);
    $("#mservicios15").html(mainServicios15);
    $("#mservicios16").html(mainServicios16);
    $("#mservicios17").html(mainServicios17);
    $("#mservicios18").html(mainServicios18);
    $("#mservicios19").html(mainServicios19);
    $("#mservicios20").html(mainServicios20);
    $("#mservicios21").html(mainServicios21);
    $("#mservicios22").html(mainServicios22);
    $("#mservicios23").html(mainServicios23);
    $("#mservicios24").html(mainServicios24);
    $("#mmision1").html(mainMision1);
    $("#mmision2").html(mainMision2);
    $("#mmision3").html(mainMision3);
    $("#mmision4").html(mainMision4);
    $("#mmision5").html(mainMision5);
    $("#mmision6").html(mainMision6);
    $("#mesquema1").html(mainEsquema1);
    $("#mesquema2").html(mainEsquema2);
    $("#mesquema3").html(mainEsquema3);
    $("#mesquema4").html(mainEsquema4);
    $("#mesquema5").html(mainEsquema5);
    $("#mesquema6").html(mainEsquema6);
    $("#mesquema7").html(mainEsquema7);
    $("#mesquema8").html(mainEsquema8);
    $("#mesquema9").html(mainEsquema9);
    $("#mbefeneficios1").html(mainBeneficios1);
    $("#mbefeneficios2").html(mainBeneficios2);
    $("#mbefeneficios3").html(mainBeneficios3);
    $("#mbefeneficios4").html(mainBeneficios4);
    $("#mbefeneficios5").html(mainBeneficios5);
    $("#mbefeneficios6").html(mainBeneficios6);
    $("#mbefeneficios7").html(mainBeneficios7);
    $("#mubicacion1").html(mainUbicacion1);
    $("#mubicacion2").html(mainUbicacion2);
    $("#mcontacto1").html(mainContact1);
    $("#mcontacto2").html(mainContact2);
    $("#mcontacto3").html(mainContact3);
    $("#mcontacto4").html(mainContact4);
    $("#mcontacto5").html(mainContact5);
    $("#mcontacto6").html(mainContact6);
    $("#mcontacto7").html(mainContact7);
    $("#mcontacto8").html(mainContact8);
    $("#mcontacto9").html(mainContact9);
    $("#fprivacidad1").html(footer1);

    $("#txtDesc9").html(texto9);
    $("#txtDesc10").html(texto10 + arrow);
    $("#txtFo1").html(footert1);

    $("#idx").html("");
    $("#jq").remove();
});       