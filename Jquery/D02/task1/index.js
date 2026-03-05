$(document).ready(function () {
  /* MENU */

  $("#servicesButton").click(function () {
    $(".section").not("#servicesSection").hide();
    $("#servicesSection").slideToggle(400);
  });

  $("#aboutButton, #galleryButton, #complainButton").click(function () {
    $(".section").hide();
    $("#servicesSection").slideUp();

    var targetId = "#" + $(this).attr("id").replace("Button", "Section");
    $(targetId).fadeIn();
  });

  /* GALLERY */
  var imageIndex = 0;
  var images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg"];

  $("#leftArrow").click(function () {
    $("#mainImage").fadeOut(300, function () {
      imageIndex = (imageIndex + 1) % images.length;
      $(this).attr("src", images[imageIndex]).fadeIn(300);
    });
  });

  $("#rightArrow").click(function () {
    $("#mainImage").fadeOut(300, function () {
      imageIndex = (imageIndex - 1 + images.length) % images.length;
      $(this).attr("src", images[imageIndex]).fadeIn(300);
    });
  });

  /*  COMPLAIN */
  $("#sendBtn").click(function () {
    var name = $("#compName").val();
    var email = $("#compEmail").val();
    var phone = $("#compPhone").val();
    var msg = $("#compText").val();

    if (name && email && phone && msg) {
      $("#previewContent").html(
        "<b>Name:</b> " +
        name +
        "<br><b>Email:</b> " +
        email +
        "<br><b>Phone:</b> " +
        phone +
        "<br><b>Complaint:</b> " +
        msg,
      );

      $("#formContainer").hide();
      $("#previewArea").fadeIn();
    } else {
      $("<h3>please fill in all data !!</h3>")
        .css("color", "red")
        .appendTo("body")
        .fadeOut(2000);
    }
  });

  $("#editBtn").click(function () {
    $("#previewArea").hide();
    $("#formContainer").fadeIn();
  });
});
