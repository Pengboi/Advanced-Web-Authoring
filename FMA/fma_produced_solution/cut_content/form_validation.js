$(document).ready(function () {
  $("form").submit(function () {
    //  Name of elements which cannot be validated 
    var checkboxName = "interests-option";

    // triggering this check and the radio buttons
    if ($("input[name=" + checkboxName + "]:checked").length) {
        // at least one of the radio buttons was checked

        // Removes not-selected class if present
        var checkbox = document.getElementsByClassName("interests-option");
        var errorMessage = document.getElementById("not-selected-message");
        for (var i = 0; i < checkbox.length; ++i) {
          var item = checkbox[i];
          item.classList.remove("not-selected");
        }
        errorMessage.style.display = "none";
        return true; // allow whatever action would normally happen to continue
    } else {
        // no radio button was checked
        var checkbox = document.getElementsByClassName("interests-option");
        var errorMessage = document.getElementById("not-selected-message");
        for (var i = 0; i < checkbox.length; ++i) {
          var item = checkbox[i];
          item.classList.add("not-selected");
        }
        errorMessage.style.display = "block";
        return false; // stop Form from being submitted
    }
  });

  $("input[name=interests-option]").change(function () {
    if ($(this).is(":checked")) {
      var errorMessage = document.getElementById("not-selected-message");
       // Removes not-selected class if present
        var checkbox = document.getElementsByClassName("interests-option");
        var errorMessage = document.getElementById("not-selected-message");
        for (var i = 0; i < checkbox.length; ++i) {
          var item = checkbox[i];
          item.classList.remove("not-selected");
        }
      errorMessage.style.display = "none";
    }
  });

  /*  Makes checkboxes togglable while focused. Accessibility Standards Compliance.  */
  $("input:checkbox").keypress(function (e) {
    if ((e.keyCode ? e.keyCode : e.which) == 13) {
      $(this).trigger("click");
    }
  });
});