var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"><img src="dancerchicken.png" alt="Dancer"></span>');
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(this.top, this.left);
}

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.$node.stop();
}
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
      top: top,
      left: left
  };
  this.$node.css(styleSettings);
};
