class shape {
  constructor (text, textColor, shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;

    const svgOpeningTag = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    const svgClosingTag = '</svg>';


  }
  render(){
    return svgOpeningTag+svgClosingTag;
  }
}