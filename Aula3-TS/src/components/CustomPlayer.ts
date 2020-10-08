import ISources from '../interfaces/ISources';

export default class CustomPlayer {
  _width: number;
  _height: number;
  _messageUnsuportted: string;
  private videoTagtHTML: HTMLVideoElement;
  private errorMessages: string[] = [
    'Largura inválida, valor não é do tipo numérico',
    'Alura inválida, valor não é do tipo numérico',
    'Não foi possível renderizar o player: ',
  ];

  constructor(width: number, height: number, messageUnsuportted: string) {
    this._width = width;
    this._height = height;
    this._messageUnsuportted = messageUnsuportted;

    this.videoTagtHTML = document.createElement('video');
    this.videoTagtHTML.width = this._width;
    this.videoTagtHTML.height = this._height;
    this.videoTagtHTML.controls = true;
  }

  setSources(sources: ISources[]) {
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
      throw `${this.errorMessages[0]} ${errorWidth}`;
    }
  }

  get width() {
    return this._width;
  }

  set height(height) {
    try {
      this.height = height;
    } catch (errorHeight) {
      throw `${this.errorMessages[1]} ${errorHeight}`;
    }
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

  render(sectionIdHtml: string) {
    try {
      const sectionTagHTML = document.getElementById(sectionIdHtml);
      if (!sectionTagHTML) {
        const messageUnsuportted = document.createTextNode(
          this._messageUnsuportted,
        );
        this.videoTagtHTML.appendChild(messageUnsuportted);
        const sectionElement = document.createElement('section');
        sectionElement.setAttribute('id', sectionIdHtml);
        sectionElement.appendChild(this.videoTagtHTML);
        document.body.appendChild(sectionElement);
      } else {
        sectionTagHTML.appendChild(this.videoTagtHTML);
      }
    } catch (errorRender) {
      throw `${this.errorMessages[2]} ${errorRender}`;
    }
  }
}
