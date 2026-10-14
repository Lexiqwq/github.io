function Alien () {
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.showFlame = false;
  this.width = 60;
  this.height = 60;
}

Alien.prototype.draw = function (context) {
  var Alien = new Image();
  Alien.src = "Alien.png";
  var alienflame = new Image();
  alienflame.src = "alienflame.png";

  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  
  context.drawImage(Alien, -Alien.width/2,-Alien.height/2);

  if (this.showFlame) {
    context.drawImage(alienflame, -alienflame.width/2,-alienflame.height/2);
  }
  
  context.restore();
};

