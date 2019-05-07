// import { LitElement, html } from '@polymer/lit-element';
import { LitElement, html, css } from 'lit-element';
// import { FaStyles } from './css/fontawesome-all.css.js';

export class FaIcon extends LitElement {
  static get properties() {
    return {
      iclass: String
    }
  }
  constructor() {
    super();
    this.iclass="";
    const fontEl = document.createElement('link');
    fontEl.rel = 'stylesheet';
    fontEl.href = 'https://use.fontawesome.com/releases/v5.8.1/css/all.css';
    fontEl.integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
    fontEl.crossorigin="anonymous"
    document.head.appendChild(fontEl);
  }
  _render({ iclass }) {
    return html`<i class$="${iclass}"></i>`;
  }
}
customElements.define('fa-icon', FaIcon);