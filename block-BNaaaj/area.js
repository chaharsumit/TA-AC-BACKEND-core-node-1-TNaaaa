function areaOfSquare(side){
  return side * side;
}

function areaOfCircle(radii){
  return 3.14 * (radii * radii);
}

function areaOfRectangle(length, breadth){
  return length * breadth;
}

module.exports = {
  areaOfSquare,
  areaOfCircle,
  areaOfRectangle,
}