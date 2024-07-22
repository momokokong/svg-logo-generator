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
    test('getSVGShape() should remind the user to use the correct classes', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const shapeColor = "000000";
      const svg = new Shape(text, textColor, shape, shapeColor);
      expect(svg.getSVGShape()).toMatch(/^Should use either/);
    });
    test('getSVGText() should return a string containing the svg text text and value', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const shapeColor = "000000";
      const svg = new Shape(text, textColor, shape, shapeColor);
      expect(svg.getSVGText()).toMatch(/^<text.+text>$/);
    });
    test('getSVGContent() should combine getSVGShape() and getSVGText()', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const shapeColor = "000000";
      const svg = new Shape(text, textColor, shape, shapeColor);
      expect(svg.getSVGContent()).toMatch(/^Should use either.+<text.+text>$/);
    });
    test('render() should combine svgOpeningTag, getSVGContent and svgClosingTag', () => {
      const text = "000";
      const textColor = "FFFFFF";
      const shape = "Shape";
      const shapeColor = "000000";
      const svg = new Shape(text, textColor, shape, shapeColor);
      expect(svg.render()).toMatch(/^<svg.+Should use either.+text>.+svg>$/);
    });
  });
});
