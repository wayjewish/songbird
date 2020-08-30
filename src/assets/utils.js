function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function soundClick(src) {
  var audio = new Audio();
  audio.src = src;
  audio.autoplay = true;
}

export {
  getRandomInRange, soundClick
};