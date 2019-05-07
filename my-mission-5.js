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

class MyMission5 extends LitElement {
  render () {
    if (this.code === 1) {
      return html`
      `
    } else if (this.code === 'succes') {
      return html`
      <h1>Très fort!</h1>
      <div>
        La victime #6 est un singe qui est pétrifié de froid dans la cuisine.

      </div>
      <form>
          Code pour la suite <input type="text">
          <input type="submit" @click=${this.suite} value="Valider">
        </form>      
      `
    } else {
      return html`
        <h1>Mission 5</h1>
        <div>
            <p>Si on brasse tous ces dés, et qu’on fait la somme des dés...</p>

          <p>Quel est le plus petit nombre qu’on peut obtenir?</p>
          <p>Quel est le plus grand nombre qu’on peut obtenir?</p>

        </div>
        <form>
        <p>Réponse </p>
        Plus petit nombre :
          <input type="text" id="petit">
          Plus grand nombre :
          <input type="text" id="grand">
          <input type="submit" @click=${this.validerReponse} value="Valider">
        </form>
      `
    }
  }

  validerReponse () {
    const petit = this.shadowRoot.querySelector('input#petit').value
    const grand = this.shadowRoot.querySelector('input#grand').value
    if (petit.toLocaleLowerCase().trim() === '21' &&
      grand.toLocaleLowerCase().trim() === '232' ) {
      this.code = 'succes'
    } else {
      alert('Pénalité : -2 min')
    }
  }

  suite () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === 'frigorifié') {
      document.location = '#my-mission6'
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
customElements.define('my-mission5', MyMission5)
