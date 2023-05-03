var editBtn = document.getElementById("edit-btn");
var editable = document.getElementById("editable");

editBtn.addEventListener("click", function() {
  editable.contentEditable = true;
  editable.focus();
  var range = document.createRange();
  range.selectNodeContents(editable);
  range.collapse(false);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
});

editable.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    editable.blur();
  }
});

editable.addEventListener("blur", function() {
  editBtn.style.display = "inline-block";
  editable.contentEditable = false;
});

editable.addEventListener("focus", function() {
  editBtn.style.display = "true";
});

var editBtn2 = document.getElementById("edit-btn2");
var editable2 = document.getElementById("editable2");

editBtn2.addEventListener("click", function() {
  editable2.contentEditable = true;
  editable2.focus();
  var range = document.createRange();
  range.selectNodeContents(editable2);
  range.collapse(false);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
});

editable2.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    editable2.blur();
  }
});

editable2.addEventListener("blur", function() {
  editBtn2.style.display = "inline-block";
  editable2.contentEditable = false;
});

editable2.addEventListener("focus", function() {
  editBtn2.style.display = "true";
});