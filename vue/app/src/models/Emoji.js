import { emojis } from '@/plugins/emojis.config';
const Which = {
  L: 'l',
  R: 'r',
};

export class Emoji {
  _emojis = [];
  _rEmojis = [];
  _lEmojis = [];
  ROW_LENGTH = 15;

  get rEmojis() {
    return this._rEmojis;
  }

  get lEmojis() {
    return this._lEmojis;
  }

  constructor() {
    this._emojis = emojis;
    this.shuffle();
    this.setEmojis();
  }

  shuffle() {
    this._emojis.sort(() => Math.random() - 0.5);
  }

  setEmojis() {
    for (let i = 0; i < this.ROW_LENGTH * 2; i += 2) {
      this._rEmojis.push(this._emojis[i]);
      this._lEmojis.push(this._emojis[i + 1]);
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  exchangeEmoji(which) {
    const oldIdx = this.getRandomInt(this.ROW_LENGTH);
    const newIdx = this.getRandomInt(this._emojis.length);
    switch (which) {
      case Which.L:
        this._lEmojis[oldIdx] = this._emojis[newIdx];
        break;
      case Which.R:
        this._rEmojis[oldIdx] = this._emojis[newIdx];
        break;
      default:
        break;
    }
  }

  transition() {
    this.exchangeEmoji('l');
    this.exchangeEmoji('r');
  }
}
