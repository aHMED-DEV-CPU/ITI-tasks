$("#drag").draggable();

$("#drop").droppable({
  drop: function () {
    $("#drag").fadeOut(200);
  },
});
