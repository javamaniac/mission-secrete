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

class MyMission4 extends LitElement {
  render () {
    if (this.code === 1) {
      return html`
      `
    } else if (this.code === 'succes') {
      return html`
      <h1>Bien joué!</h1>
      <div>
        La victime #5 est un hamster se trouvant justement dans un coffre à gants.
      </div>
      <form>
          Code pour la suite <input type="text">
          <input type="submit" @click=${this.suite} value="Valider">
        </form>      
      `
    } else {
      return html`
        <h1>Mission 4</h1>
        <h2>Décryptez ce message en code morse</h2>
        <div>
        <pre style="font-size: 1.6rem;">
− • − •   − − −   • • − •   • • − •   • − •   •

• −

− − •   • −   − •   −   • • •
        </pre>
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
    let mot = value.toLocaleLowerCase().trim()
      .replace('à', 'a')
      .replace('â', 'a')
      .replace('  ', ' ')
      .replace('-', ' ')
    if (mot === 'coffre a gants') {
      this.code = 'succes'
    } else {
      alert('Pénalité : -2 min')
    }
  }

  suite () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === 'tunnel') {
      document.location = '#my-mission5'
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
customElements.define('my-mission4', MyMission4)
