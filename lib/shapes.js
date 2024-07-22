class Shape {
  constructor (text, textColor, shape, shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.svgOpeningTag = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    this.svgClosingTag = '</svg>';
  }

  getSVGShape() {
    return "Should use either Triangle, Rectangle, or Circle class. shape: " + this.shape + " shapeColor: " + this.shapeColor;
  }

  getSVGText() {
    return '<text x="150" y="131" text-anchor="middle" font-size="100" font-weight="bold" fill="#' + this.textColor + '">' + this.text + '</text>';   
  }

  render(){
    return this.svgOpeningTag + this.getSVGShape() + this.getSVGText() + this.svgClosingTag;
  }
}

class Triangle extends Shape {
  constructor (text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  getSVGShape() {
    return '<polygon points="10,10 10,190 290,100" fill="#' + this.shapeColor + '" />';   
  }
}

class Circle extends Shape {
  constructor (text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  getSVGShape() {
    return '<circle r="95" cx="150" cy="100" fill="#' + this.shapeColor + '" />';   
  }
}

class Rectangle extends Shape {
  constructor (text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  getSVGShape() {
    return '<rect width="280" height="180" x="10" y="10" fill="#' + this.shapeColor + '" />';   
  }
}

module.exports = {
  Shape, 
  Triangle,
  Circle,
  Rectangle
}
