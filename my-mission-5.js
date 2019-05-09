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
        <h1>Impressionant!</h1>
        <div>
        La victime #5 est un chaton pris dans un masque africain.
        </div>
        <form>
          Code pour la suite <input type="text">
          <input type="submit" @click=${this.suite} value="Valider">
        </form>
      `
    } else {
      return html`
        <h1>Mission 5</h1>
        <h2>Défi physique</h2>
        <img src="images/basket.png" align="right" style="width: 20%;">
        <p>À tour de rôle vous devez tenter de lancer le ballon de basketball
          dans le panier jusqu'à ce que la somme de vos paniers soit 30.
        </p>
        <form>
          Code de l'arbitre <input type="number">
          <input type="submit" @click=${this.validerReponse} value="Valider">
        </form>
      `
    }
  }

  validerReponse () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === '2365') {
      this.code = 'succes'
    } else {
      alert('Pénalité : -2 min')
    }
  }

  suite () {
    const value = this.shadowRoot.querySelector('input').value
    if (value.toLocaleLowerCase().trim() === 'moustache') {
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
