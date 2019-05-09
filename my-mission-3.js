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
        <h1>Impressionant!</h1>
        <div>
        La victime #4 est un singe qui est pétrifié de froid dans la cuisine.
        </div>
        <form>
          Code pour la suite <input type="text">
          <input type="submit" @click=${this.suite} value="Valider">
        </form>
      `
    } else {
      return html`
        <h1>Mission 3</h1>
        <h2>Question d'observation</h2>
        <div><img src="images/triangles.png" style="width: 30%;"></div>
        <p>Combien y a-t-il de triangles?</p>
        <form>
          Réponse <input type="number">
          <input type="submit" @click=${this.validerReponse} value="Valider">
        </form>
      `
    }
  }

  validerReponse () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === '12') {
      this.code = 'succes'
    } else {
      alert('Pénalité : -2 min')
    }
  }

  suite () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === 'banane') {
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
