// plugin : lit-html, es6-string-css

import { LitElement, html, css } from 'lit-element'
import { cssCommun } from './cssCommun'

const styles = css`
  ${cssCommun}
  :host {
  }
`

class MyMission7 extends LitElement {
  render () {
    if (this.code === 1) {
      return html`
      `
    } else if (this.code === 'succes') {
      return html`
      <h1>Très fort!</h1>
      <div>
        La victime #7 est un ourson emprisoné dans la chambre d'Alizée.

      </div>
      <form>
          Code pour la suite <input type="text">
          <input type="submit" @click=${this.suite} value="Valider">
        </form>      
      `
    } else {
      return html`
        <h1>Mission 7</h1>
        <div>
          <img src="images/dés.png" align="right" style="width: 30%;">
            <p>Si on brasse tous ces dés, <br>et qu’on fait la somme des dés...</p>

          <p>Quel est le plus petit nombre <br>qu’on peut obtenir?</p>
          <p>Quel est le plus grand nombre <br>qu’on peut obtenir?</p>

        </div>
        <form>
        <p>Réponse </p>
        Plus petit nombre :
          <input type="number" id="petit">
          Plus grand nombre :
          <input type="number" id="grand">
          <input type="submit" @click=${this.validerReponse} value="Valider">
        </form>
      `
    }
  }

  validerReponse () {
    const petit = this.shadowRoot.querySelector('input#petit').value
    const grand = this.shadowRoot.querySelector('input#grand').value
    if (petit.toLocaleLowerCase().trim() === '21' &&
      grand.toLocaleLowerCase().trim() === '232') {
      this.code = 'succes'
    } else {
      alert('Pénalité : -2 min')
    }
  }

  suite () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === 'miel') {
      document.location = '#my-fin'
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
customElements.define('my-mission7', MyMission7)
