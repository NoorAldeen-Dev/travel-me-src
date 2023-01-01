import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import $ from 'jquery';
import "@popperjs/core";
import "../sass/index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "normalize.css/normalize.css";
$(function(){
    $(".nav-link").click(function(){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>=500){
            $(".tr-navbar").addClass("tr-navbar__scroll");
        }
        else{
            $(".tr-navbar").removeClass("tr-navbar__scroll");
        }
    });
    $("#tr-copyright").html(new Date().getFullYear()) ;
    
    $("ul.timeline li").click(function(){
        $(this).closest("li").toggleClass("active");
    });

    
});



(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  