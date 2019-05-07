// plugin : lit-html, es6-string-css

// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element'
import { cssCommun } from './cssCommun'
// import { LitElement, html } from '@polymer/lit-element';

const styles = css`
  ${cssCommun}
  :host {
  }
`

class MyMission3 extends LitElement {
  render () {
    if (this.code === 1) {
      return html`
      `
    } else if (this.code === 'succes') {
      return html`
      <h1>Bien joué!</h1>
      <div>
        La victime #3 se trouve justement dans ce masque.
      </div>
      <form>
          Code pour la suite <input type="text">
          <input type="submit" @click=${this.suite} value="Valider">
        </form>      
      `
    } else {
      return html`
        <h1>Mission 3</h1>
        <div>
            <p>− −   • −   • • •   − − • −   • • −   • </p>
            <p> • −   • • − •   • − •   • •   − • − •   • −   • •   − •  </p>
        </div>
        <form>
          Réponse <input type="text">
          <input type="submit" @click=${this.validerReponse} value="Valider">
        </form>
      `
    }
  }

  validerReponse () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === 'masque africain') {
      this.code = 'succes'
    } else {
      alert('Pénalité : -2 min')
    }
  }

  suite () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === 'épée') {
      document.location = '#my-mission4'
    } else {
      // alert('Pénalité : -2 min')
    }
  }

  constructor () {
    // Always call super() first
    super()
    this.code = []
    this.succes = false
  }

  firstUpdated (changedProperties) {
    this.init()
  }

  init () {
  }

  static get properties () {
    return {
      succes: {
        type: Boolean
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
customElements.define('my-mission3', MyMission3)
