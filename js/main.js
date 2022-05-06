$(document).ready(function() {
  // INCREMENTO - DECREMENTO =================

  $('.qtybutton').on('click', function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  // FIN INCREMENTO - DECREMENTO

  // BTN FAVORITE
  $(".favorite").click(function() {
    $(this).toggleClass("far fas");
  });
  // FIN BTN FAVORITE

  // OPEN FILTER MOBILE

  $('#btnFilterMobile').click(function() {
    $('.filter-mobile').animate({
      left: 0
    }, 300);
    $('.header-filter-mobile').animate({
      left: 0
    }, 300);
    $('.footer-filter-mobile').animate({
      left: 0
    }, 300);
  });
  // FIN OPEN FILTER MOBILE

  // CLOSE FILTER MOBILE
  $('.closeFilterMobile').click(function() {
    $('.filter-mobile').animate({
      left: '-110%'
    }, 300);
    $('.header-filter-mobile').animate({
      left: '-110%'
    }, 300);
    $('.footer-filter-mobile').animate({
      left: '-110%'
    }, 300);
  });

  // FIN CLOSE FILTER MOBILE

  // OPEN MAIN MENU MOBILE
  $('#btnMenuMobile').click(function() {
    $('.main-menu-mobile').animate({
      left: 0
    }, 300);
  });
  // FIN OPEN MAIN MENU MOBILE

  // CLOSE MAIN MENU MOBILE
  $('.closeMenuMobile').click(function() {
    // $('.wrap-categorias').hide();
    $('.main-menu-mobile').animate({
      left: '-110%'
    }, 300);
  });

  // FIN CLOSE MAIN MENU MOBILE

  // OPEN MENU PEFIL MOBILE
  $('#btnMenuPerfilMobile').click(function() {
    $('.menu-perfil-mobile').animate({
      left: 0
    }, 300);
  });

  // CLOSE MAIN MENU MOBILE
  $('.closeMenuPerfilMobile').click(function() {
    // $('.wrap-categorias').hide();
    $('.menu-perfil-mobile').animate({
      left: '-110%'
    }, 300);
  });
  // FIN OPEN MENU PERFIL MOBILE

  // OPEN SEARCHER MENU MOBILE
  $('#btnSearcherMobile').click(function() {
    $('.searcher-mobile').animate({
      left: 0
    }, 300);
  });
  // FIN OPEN SEARCHER MENU MOBILE

  // CLOSE SEARCHER MENU MOBILE
  $('.closeSearcherMobile').click(function() {
    // $('.wrap-categorias').hide();
    $('.searcher-mobile').animate({
      left: '-110%'
    }, 300);
  });

  // FIN CLOSE SEARCHER MENU MOBILE

  // OPEN ORDER MENU MOBILE
  $('#btnOrderMobile').click(function() {
    $('.menu-order-mobile').animate({
      right: 0
    }, 300);
  });
  // FIN OPEN ORDER MENU MOBILE

  // CLOSE ORDER MENU MOBILE
  $('.closeOrderMobile').click(function() {
    // $('.wrap-categorias').hide();
    $('.menu-order-mobile').animate({
      right: '-110%'
    }, 300);
  });

  $('.form-group-customRadio .custom-radio').click(function() {
    // $('.wrap-categorias').hide();
    $('.menu-order-mobile').animate({
      right: '-110%'
    }, 300);
  });

  // FIN CLOSE ORDER MENU MOBILE

  // MOVIE TRAILER
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#video").attr('src');

  /* Remove iframe src attribute on page load to
  prevent autoplay in background */
  $("#video").attr('src', '');

  /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
  $("#modalTrailer").on('shown.bs.modal', function() {
    $("#video").attr('src', url);
  });

  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#modalTrailer").on('hide.bs.modal', function() {
    $("#video").attr('src', '');
  });
  // FIN MOVIE TRAILER

  // TOOLTIP
  $('[data-toggle="tooltip"]').tooltip();
  // FIN TOOLTIP

  // FILE INPUT
  $(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

  // END FILE INPUT


  $('[data-toggle="tooltip"]').tooltip();

  // SHOW HIDE RADIO BUTTONS DATOS ENTREGA

  $("#customPersonaCargoYo").click(function() {
    $(".box-cargo-pedido-otro").hide();
    $(".box-cargo-pedido-yo").show();
  });

  $("#customPersonaCargoOtro").click(function() {
    $(".box-cargo-pedido-yo").hide();
    $(".box-cargo-pedido-otro").show();
  });

  // SHOW HIDE RADIO BUTTONS DATOS ENTREGA

  // SHOW HIDE FIELDSET NUEVA DIRECCION
  $("#guardar-direccion").click(function() {
    $("#fieldset-primera-direccion").hide();
    $("#fieldset-datos-envio").show();
  });
  // END SHOW HIDE FIELDSET NUEVA DIRECCION

  // SHOW BTNS EDIT PERFIL
  $("#edit-datosPersonales").click(function() {
    $(".wrap-content-btn-perfil").show();
    $("#edit-datosPersonales").hide();
  });

  $("#cancelar-edit-datosPersonales").click(function() {
    $(".wrap-content-btn-perfil").hide();
    $("#edit-datosPersonales").show();
  });
  // END SHOW BTNS EDIT PERFIL

 // UPLOAD PICTURE PROFILE
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function() {
    readURL(this);
  });

  // END UPLOAD PICTURE PROFILE

  // ACCORDION FILTER

  $(".accordion-card-header").click(function() {
    $(".accordion-less").toggleClass("show hide");
    $(".accordion-more").toggleClass("show hide");
  });

  $(".accordion-header-vales").click(function() {
    $(".accordion-less-vales").toggleClass("show hide");
    $(".accordion-more-vales").toggleClass("show hide");
  });

  $(".accordion-header-envio").click(function() {
    $(".accordion-less-envio").toggleClass("show hide");
    $(".accordion-more-envio").toggleClass("show hide");
  });

  $(".accordion-header-delivery").click(function() {
    $(".accordion-less-delivery").toggleClass("show hide");
    $(".accordion-more-delivery").toggleClass("show hide");
  });

  $(".accordion-header-delivery-proveedor").click(function() {
    $(".accordion-less-delivery-proveedor").toggleClass("show hide");
    $(".accordion-more-delivery-proveedor").toggleClass("show hide");
  });
  // END ACCORDION FILTER


  // TABS HOVER
  $('.nav-tabs-hover > li').mouseover(function() {
    $(this).find('a').tab('show');
  });
  $('.nav-tabs-hover > li').mouseout(function() {
    $(this).find('a').tab('hide');
  });

  // END TABS HOVER


  // Load modal
  // $(function() {
  //   $("#modal-flyer-fe").modal();
  // });
  // End load modal



});
