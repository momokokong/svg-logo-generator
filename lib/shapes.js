// shape.js
// Class definition for Shape, Triangle, Circle and Rectangle.  Shape class is the super class that the other three inherited.

// Class Shape
// The super class that contains common properties and methods for Triangle, Circle and Rectangle.
// properties:
//   text: string, to show on the svg logo
//   textColor: string, specifies the color of the text in 6 digit hexadecimal format
//   shape: string, the shape of the logo.  
//   shapeColor: string, specifies the color of the shape in 6 digit hexadecimal format
//   svgOpeningTag: string, contains the standard opening tag for svg
//   svgClosingTag: string, contains the standard closing tag for svg
class Shape {
//   constructor arguments:
//   text: string, user input text to show on the svg logo
//   textColor: string, user specified color of the text in 6 digit hexadecimal format
//   shape: string, user picked shape of the logo.  
//   shapeColor: string, user specified color of the shape in 6 digit hexadecimal format
  constructor (text, textColor, shape, shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.svgOpeningTag = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    this.svgClosingTag = '</svg>';
  }

// method getSVGShape()
// (should not use from Shape) throw an error to the coder that this method should not be used.
  getSVGShape() {
    throw new Error("Should use corresponding Triangle, Rectangle, or Circle class. shape: " + this.shape + " shapeColor: " + this.shapeColor);
  }
// method getSVGText()
// return the standardized text element for the svg logo
  getSVGText() {
    return '<text x="150" y="131" text-anchor="middle" font-size="80" font-weight="bold" fill="#' + this.textColor + '">' + this.text + '</text>';   
  }

// method render()
// (should not use from Shape) throw an error from getSVGShape() to the coder that this method should not be used if it's calling from Shape class.
// Return a full string of svg file if called from the child classes.
  render(){
    return this.svgOpeningTag + this.getSVGShape() + this.getSVGText() + this.svgClosingTag;
  }
}

// Class Triangle
// Triangle inherited from Shape and overwrite getSVGShape() with polygon element to draw the triangle. 
class Triangle extends Shape {
  constructor (text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  getSVGShape() {
    return '<polygon points="10,10 10,190 290,100" fill="#' + this.shapeColor + '" />';   
  }
}

// Class Circle
// Circle inherited from Shape and overwrite getSVGShape() with circle element to draw the circle. 
class Circle extends Shape {
  constructor (text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  getSVGShape() {
    return '<circle r="95" cx="150" cy="100" fill="#' + this.shapeColor + '" />';   
  }
}

// Class Rectangle
// Rectangle inherited from Shape and overwrite getSVGShape() with rectangle element to draw the rectangle. 
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
