// plugin : lit-html, es6-string-css

// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element'
import { } from './my-mission-1'
import { } from './my-mission-2'
import { } from './my-mission-3'
import { } from './my-mission-4'

const styles = css`
:host {
    display: block;
}

`

// Extend the LitElement base class
class MyMission extends LitElement {
  //   foo = 'foo';

  render () {
    return html`
    <h3>Temps restant : ${this.temps}</h3>
    
    <section></section>

     <div>
      <a href="#my-mission1">Étape 1</a>
      <a href="#my-mission2">Étape 2</a>
      <a href="#my-mission3">Étape 3</a>
      <a href="#my-mission4">Étape 4</a>
     </div>

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

    this.shadowRoot.querySelector('section').innerHTML = `<h1><${this.displayCode}></${this.displayCode}></h1>`
  }

  firstUpdated (changedProperties) {
    this.init()
  }

  init () {
    const DELAIS = 60 * 60 * 1000

    this.onHashChange()

    /* global localStorage */
    const dateInit = localStorage.getItem('tempInit')
    if (dateInit) {
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
