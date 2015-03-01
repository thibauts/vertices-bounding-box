
function boundingBox(positions) {
  if(positions.length === 0) {
    return null;
  }

  var dimensions = positions[0].length;
  var min = new Array(dimensions);
  var max = new Array(dimensions);

  for(var i=0; i<dimensions; i++) {
    min[i] =  Infinity;
    max[i] = -Infinity;
  }

  positions.forEach(function(position) {
    for(var i=0; i<dimensions; i++) {
      max[i] = position[i] > max[i] ? position[i] : max[i];
      min[i] = position[i] < min[i] ? position[i] : min[i];
    }
  });

  return [min, max];
}

module.exports = boundingBox;