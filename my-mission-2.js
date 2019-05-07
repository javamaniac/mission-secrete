// plugin : lit-html, es6-string-css

// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element'
// import { LitElement, html } from '@polymer/lit-element';

const styles = css`
:host {
    display: block;
}
`

class MyMission2 extends LitElement {
  render () {
    if (this.code === 1) {
      return html`
      `
    } else if (this.code === 'succes') {
      return html`
        <div>
          La victime #2 est un poulain emprisonné dans un lieu avec des vélos.
        </div>
        <form>
          Code pour la suite <input type="text">
          <input type="submit" @click=${this.suite} value="Valider">
        </form>
      `
    } else {
      return html`
        <h1>Mission 2</h1>
        <div>
     <div>8 x 7 = ?</div>
     <div>9 x 6 = ?</div>
     <div>7 x 3 = ?</div>
     <div>4 x 4 = ?</div>
     <div></div>
     <div>Quel est la somme des réponses?</div>
        </div>
        <form>
          Réponse <input type="number">
          <input type="submit" @click=${this.validerReponse} value="Valider">
        </form>
      `
    }
  }

  validerReponse () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === '147') {
      this.code = 'succes'
    } else {
      alert('Pénalité : -2 min')
    }
  }

  suite () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === 'vampire') {
      document.location = '#my-mission3'
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
customElements.define('my-mission2', MyMission2)
