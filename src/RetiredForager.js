var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = 'grey';
  this.food = this.food;
  this.treasureChest = this.treasureChest;
};
RetiredForagerBee.prototype = Object.create(ForagerBee);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead";
}
RetiredForagerBee.prototype.eat = Grub.prototype.eat;
RetiredForagerBee.prototype.gamble = ForagerBee.prototype.forage;
