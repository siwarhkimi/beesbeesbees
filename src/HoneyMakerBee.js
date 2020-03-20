var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "make honey"
  this.color = this.color;
  this.food = this.food//the same as Grub.prototype.food
  this.honeyPot = 0;

};

HoneyMakerBee.prototype = Object.create(Bee);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.eat = Bee.prototype.eat;
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
};

