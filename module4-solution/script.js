(function () {

var names = ["Sai", "Janaki", "Jahnavi", "jay", "Bharath", "Siva", "Sowmya"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    bye(names[i]);
  }
  else {
    hello(names[i]);
  }
}

})();
