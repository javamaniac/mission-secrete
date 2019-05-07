// plugin : lit-html, es6-string-css

// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element'
// import { LitElement, html } from '@polymer/lit-element';

const styles = css`
:host {
    display: block;
}
`

class MyMission4 extends LitElement {
  render () {
    if (this.code === 1) {
      return html`
      `
    } else if (this.code === 'succes') {
      return html`
        <div>
          La première victime est un pélican qui est emprisonné dans une maison de barbie.
        </div>
        <form>
          Code pour la suite <input type="text">
          <input type="submit" @click=${this.suite} value="Valider">
        </form>
      `
    } else {
      return html`
        <h1>Mission 4</h1>
        <div>
            <p>Avec cette boîte de dés.</p>
            <p>Si on brasse tous ces dés, et qu’on fait la somme des dés, </p>
            <p>Quel est le plus petit nombre qu’on peut obtenir?</p>
            <p>Quel est le plus grand nombre qu’on peut obtenir?</p>
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
    if (value.toLocaleLowerCase().trim() === 'kidnapping') {
      this.code = 'succes'
    } else {
      alert('Pénalité : -2 min')
    }
  }

  suite () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === 'chien') {
      document.location = '#my-mission2'
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
