// plugin : lit-html, es6-string-css

// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element'
import { } from './my-mission-0'
import { } from './my-mission-1'
import { } from './my-mission-2'
import { } from './my-mission-3'
import { } from './my-mission-4'
import { } from './my-mission-5'
import { } from './my-mission-6'
import { } from './my-mission-7'
import { } from './my-fin'

const styles = css`
:host {
    display: block;
}
h3 {
  text-align: center;
  margin: 0;
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 2rem;
}

`

// Extend the LitElement base class
class MyMission extends LitElement {
  //   foo = 'foo';

  render () {
    return html`
    <h3>Temps restant : ${this.temps}</h3>
    
    <section></section>
    `
  }

  constructor () {
    // Always call super() first
    super()
    this.code = []
    this.displayCode = 'my-mission0'

    // this.addEventListener('DOMContentLoaded', this.handleLoaded);
  }

  connectedCallback () {
    super.connectedCallback()
    window.addEventListener('hashchange', () => { this.onHashChange() })

    // document.addEventListener('readystatechange', this.handleChange);
  }

  onHashChange () {
    const hash = document.location.hash
    if (hash) {
      this.displayCode = hash.substring(1)
    }

    this.shadowRoot.querySelector('section').innerHTML = `<${this.displayCode}></${this.displayCode}>`
    window.scrollTo(0, 0)
  }

  firstUpdated (changedProperties) {
    this.init()
  }

  init () {
    const DELAIS = 90 * 60 * 1000

    this.onHashChange()

    /* global localStorage */
    const dateInit = localStorage.getItem('tempInit')
    if (dateInit && document.location.hash !== '#my-mission0') {
      this.dateInit = new Date(dateInit)
    } else {
      this.dateInit = new Date(new Date().getTime() + DELAIS)
      localStorage.setItem('tempInit', this.dateInit)
    }

    setInterval(() => {
      const tempsRestant = this.dateInit - new Date()
      this.temps = Math.round(tempsRestant / 60 / 1000) + ' min'
    }, 1000)
  }

  static get properties () {
    return {
      displayCode: {
        type: String
      },
      temps: {

      },
      dateInit: {

      },
      code: {
        type: Array
      }
    }
  }

  static get styles () {
    return styles
  }
}

/* global customElements */
// Register the new element with the browser.
customElements.define('my-mission', MyMission)
