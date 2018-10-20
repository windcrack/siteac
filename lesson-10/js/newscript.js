let text = prompt('Введите текст', '');
class Options{
  constructor(height, wight, bg, fontSize, textAlign){
    this.height = height;
    this.wight = wight;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  creadDiv(){
    let div = document.createElement('div');
    div.textContent = text;
    div.style.cssText = `height:${this.height}px; width:${this.wight}px; color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign};`;
    document.body.appendChild(div);
  }
}

const textDiv = new Options(100, 100, 'red', 22, 'center');

textDiv.creadDiv();
