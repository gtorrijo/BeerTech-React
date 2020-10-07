export default class CustomPlayer {
  constructor(width, height, messageUnsuportted) {
    this._width = width;
    this._height = height;
    this._messageUnsuportted = messageUnsuportted;

    this.videoTagtHTML = document.createElement('video');
    this.videoTagtHTML.width = this._width;
    this.videoTagtHTML.height = this._height;
    this.videoTagtHTML.controls = true;
  }

  setSources(sources) {
    sources.map((source) => {
      const sourceElement = document.createElement('source');
      sourceElement.src = source.src;
      sourceElement.type = source.type;
      this.videoTagtHTML.appendChild(sourceElement);
    });
  }

  set width(width) {
    try {
      this._width = width;
    } catch (errorWidth) {
      console.log(`${errorMessages[0]} ${errorWidth}`);
    }
  }

  get width() {
    return this._width;
  }

  set height(height) {
    this.height = height;
  }

  get height() {
    return this._height;
  }

  set messageUnsuportted(messageUnsuportted) {
    this._messageUnsuportted = messageUnsuportted;
  }

  get messageUnsuportted() {
    return this._messageUnsuportted;
  }

  render(sectionIdHtml) {
    try {
      const sectionTagHTML = document.getElementById(sectionIdHtml);
      if (!sectionTagHTML) {
        const sectionElement = document.createElement('section');
        sectionElement.id = sectionIdHtml;
        sectionElement.appendChild(this.videoTagtHTML);
        document.body.appendChild(sectionElement);
      } else {
        sectionTagHTML.appendChild(this.videoTagtHTML);
      }
    } catch (errorRender) {
      console.log(`'Não foi possível renderizar o player: ' ${errorRender}`);
    }
  }
}
