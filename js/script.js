// JavaScript Codes -----------------------

// Jquery Codes ---------------------------

$(document).ready(function () {
  // JQ Start

  $("button").click(function () {
    alert("Hello World");
  });

  // Drag JqueryUI
  $("#buttondrag").draggable();

  //   Accordion JQueryUI
  $("#accordion").accordion({
    collapsible: true,
  });

  //   AutoComplete JqueryUI
  $(function () {
    var courseNames = ["BBA", "CSE", "ENG", "EEE"];
    $("#course_name").autocomplete({
      source: courseNames,
    });
  });

  //   JQ End
});
