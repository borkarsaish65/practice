function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  
  var el = document.createElement("span");
  el.innerHTML = "test";
  var div = document.getElementById("mainDiv");
  insertAfter(div, el);