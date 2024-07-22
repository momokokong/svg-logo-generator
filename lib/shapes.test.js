const {Shape, Triangle, Circle, Rectangle} = require("./shapes.js");

describe('Shape Class', () => {
  describe('Instantiate properties', () => {
    test('should be an instance of Shape class', () => {
      const svg = new Shape();
      expect(svg).toBeInstanceOf(Shape);
    });
    test('Initialize text', () => {
      const text = "000";
      const svg = new Shape(text);
      expect(svg.text).toBe(text);
    });
    test('Initialize textColor', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const svg = new Shape(text, textColor);
      expect(svg.textColor).toBe(textColor);
    });
    test('Initialize shape', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const svg = new Shape(text, textColor, shape);
      expect(svg.shape).toBe(shape);
    });
    test('Initialize shapeColor', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const shapeColor = "000000";
      const svg = new Shape(text, textColor, shape, shapeColor);
      expect(svg.shapeColor).toBe(shapeColor);
    });
    test('Initialize svgOpeningTag', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const shapeColor = "000000";
      const svg = new Shape(text, textColor, shape, shapeColor);
      expect(svg.svgOpeningTag).toBe('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
    });
    test('Initialize svgClosingTag', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const shapeColor = "000000";
      const svg = new Shape(text, textColor, shape, shapeColor);
      expect(svg.svgClosingTag).toBe('</svg>');
    });
  });
  describe('Instantiate methods', () => {
    test('getSVGShape() should throw an error because Shape class should not be used', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const shapeColor = "000000";
      const svg = new Shape(text, textColor, shape, shapeColor);
      const err = new Error("Should use corresponding Triangle, Rectangle, or Circle class. shape: " + shape + " shapeColor: " + shapeColor);
      expect(() =>svg.getSVGShape()).toThrow(err);
    });
    test('getSVGText() should return a string containing the svg text text and value', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const shapeColor = "000000";
      const svg = new Shape(text, textColor, shape, shapeColor);
      const regex = new RegExp("^<text.+" + textColor + ".+" + text + ".+text>$");
      expect(svg.getSVGText()).toMatch(regex);
    });
    test('render() should throw an error from getSVGShape()', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const shapeColor = "000000";
      const svg = new Shape(text, textColor, shape, shapeColor);
      const err = new Error("Should use corresponding Triangle, Rectangle, or Circle class. shape: " + shape + " shapeColor: " + shapeColor);
      expect(() =>svg.render()).toThrow(err);
    });
  });
});

describe('Circle Class', () => {
  describe('Instantiate inherited properties', () => {
    test('should be an instance of Circle class', () => {
      const svg = new Circle();
      expect(svg).toBeInstanceOf(Circle);
    });
    test('Initialize text', () => {
      const text = "JCG";
      const svg = new Circle(text);
      expect(svg.text).toBe(text);
    });
    test('Initialize textColor', () => {
      const text = "JCG";
      const textColor = "123456";
      const svg = new Circle(text, textColor);
      expect(svg.textColor).toBe(textColor);
    });
    test('Initialize shape', () => {
      const text = "JCG";
      const textColor = "123456";
      const shape = "Circle";
      const svg = new Circle(text, textColor, shape);
      expect(svg.shape).toBe(shape);
    });
    test('Initialize shapeColor', () => {
      const text = "JCG";
      const textColor = "123456";
      const shape = "Circle";
      const shapeColor = "654321";
      const svg = new Circle(text, textColor, shape, shapeColor);
      expect(svg.shapeColor).toBe(shapeColor);
    });
  });
  describe('Instantiate polymorphed methods', () => {
    test('getSVGShape() should remind the user to use the correct classes', () => {
      const text = "JCG";
      const textColor = "123456";
      const shape = "Circle";
      const shapeColor = "654321";
      const svg = new Circle(text, textColor, shape, shapeColor);
      const regex = new RegExp("^<circle.+" + shapeColor + ".+\/>$");
      expect(svg.getSVGShape()).toMatch(regex);
    });
    test('render() should combine svgOpeningTag, getSVGContent and svgClosingTag', () => {
      const text = "JCG";
      const textColor = "123456";
      const shape = "Circle";
      const shapeColor = "654321";
      const svg = new Circle(text, textColor, shape, shapeColor);
      const regex = new RegExp("^<svg.+<circle.+" + shapeColor + ".+text.+" + textColor + ".+" + text +".+svg>$");
      expect(svg.render()).toMatch(regex);
    });
  });
});

describe('Rectangle Class', () => {
  describe('Instantiate inherited properties', () => {
    test('should be an instance of Rectangle class', () => {
      const svg = new Rectangle();
      expect(svg).toBeInstanceOf(Rectangle);
    });
    test('Initialize text', () => {
      const text = "III";
      const svg = new Rectangle(text);
      expect(svg.text).toBe(text);
    });
    test('Initialize textColor', () => {
      const text = "III";
      const textColor = "111111";
      const svg = new Rectangle(text, textColor);
      expect(svg.textColor).toBe(textColor);
    });
    test('Initialize shape', () => {
      const text = "III";
      const textColor = "111111";
      const shape = "Rectangle";
      const svg = new Rectangle(text, textColor, shape);
      expect(svg.shape).toBe(shape);
    });
    test('Initialize shapeColor', () => {
      const text = "III";
      const textColor = "111111";
      const shape = "Rectangle";
      const shapeColor = "ABABAB";
      const svg = new Rectangle(text, textColor, shape, shapeColor);
      expect(svg.shapeColor).toBe(shapeColor);
    });
  });
  describe('Instantiate polymorphed methods', () => {
    test('getSVGShape() should remind the user to use the correct classes', () => {
      const text = "III";
      const textColor = "111111";
      const shape = "Rectangle";
      const shapeColor = "ABABAB";
      const svg = new Rectangle(text, textColor, shape, shapeColor);
      const regex = new RegExp("^<rect.+" + shapeColor + ".+\/>$");
      expect(svg.getSVGShape()).toMatch(regex);
    });
    test('render() should combine svgOpeningTag, getSVGContent and svgClosingTag', () => {
      const text = "III";
      const textColor = "111111";
      const shape = "Rectangle";
      const shapeColor = "ABABAB";
      const svg = new Rectangle(text, textColor, shape, shapeColor);
      const regex = new RegExp("^<svg.+<rect.+" + shapeColor + ".+text.+" + textColor + ".+" + text +".+svg>$");
      expect(svg.render()).toMatch(regex);
    });
  });
});

describe('Triangle Class', () => {
  describe('Instantiate inherited properties', () => {
    test('should be an instance of Triangle class', () => {
      const svg = new Triangle();
      expect(svg).toBeInstanceOf(Triangle);
    });
    test('Initialize text', () => {
      const text = "XXX";
      const svg = new Triangle(text);
      expect(svg.text).toBe(text);
    });
    test('Initialize textColor', () => {
      const text = "XXX";
      const textColor = "E0E0E0";
      const svg = new Triangle(text, textColor);
      expect(svg.textColor).toBe(textColor);
    });
    test('Initialize shape', () => {
      const text = "XXX";
      const textColor = "E0E0E0";
      const shape = "Triangle";
      const svg = new Triangle(text, textColor, shape);
      expect(svg.shape).toBe(shape);
    });
    test('Initialize shapeColor', () => {
      const text = "XXX";
      const textColor = "E0E0E0";
      const shape = "Triangle";
      const shapeColor = "0e0e0e";
      const svg = new Triangle(text, textColor, shape, shapeColor);
      expect(svg.shapeColor).toBe(shapeColor);
    });
  });
  describe('Instantiate polymorphed methods', () => {
    test('getSVGShape() should remind the user to use the correct classes', () => {
      const text = "XXX";
      const textColor = "E0E0E0";
      const shape = "Triangle";
      const shapeColor = "0e0e0e";
      const svg = new Triangle(text, textColor, shape, shapeColor);
      const regex = new RegExp("^<polygon.+" + shapeColor + ".+\/>$");
      expect(svg.getSVGShape()).toMatch(regex);
    });
    test('render() should combine svgOpeningTag, getSVGContent and svgClosingTag', () => {
      const text = "XXX";
      const textColor = "E0E0E0";
      const shape = "Triangle";
      const shapeColor = "0e0e0e";
      const svg = new Triangle(text, textColor, shape, shapeColor);
      const regex = new RegExp("^<svg.+<polygon.+" + shapeColor + ".+text.+" + textColor + ".+" + text +".+svg>$");
      expect(svg.render()).toMatch(regex);
    });
  });
});