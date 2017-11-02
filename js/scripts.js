function Showcase(name, album, year) {
  this.name = name;
  this.album = album;
  this.year = year;
  // this.image = image;
};

Showcase.prototype.together = function() {
  var total = "<p>" + this.name + "</p>" + "<p>" + this.album + "</p>" + "<p>" + this.year + "</p>";
  return total;
};



$(document).ready(function() {
  $("form.showcase").submit(function(event) {
    event.preventDefault()

  var inputName = $("input[name='name']").val();
  var inputAlbum = $("input[name='album']").val();
  var inputYear = $("input[name='year']").val();
  var inputImage = $("input[name='image']").val();
  var showcaseAlbum = new Showcase (inputName, inputAlbum, inputYear);


  $(".output").append("<div class='outer'>" + "<img src=" + inputImage + ">" + "<p class=para>" + showcaseAlbum.together() + "</p>" + "</div>");

  });
});
