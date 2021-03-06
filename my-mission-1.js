// plugin : lit-html, es6-string-css

import { LitElement, html, css } from 'lit-element'
import { cssCommun } from './cssCommun'

const styles = css`
  ${cssCommun}
  :host {
  }
`

class MyMission1 extends LitElement {
  render () {
    if (this.code === 1) {
      return html`
      `
    } else if (this.code === 'succes') {
      return html`
        <h1>Bien joué!</h1>
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
        <h1>Mission 1</h1>
        <h2>Répondez à cette charade</h2>
        <div>
            <p>Mon premier est le dernier mot du nom du célèbre hors-la-loi. Son nom commence par “Billy The ___”.</p>
            <p>Mon second est la traduction du mot sieste en anglais.</p>
            <p>Mon troisième est la dernière syllabe de l’activité que Alizée fait avec ses grands parents à chaque été.</p>
            <p>Mon tout est ce qui est arrivé à ceux que vous cherchez.</p>
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
    if (value.toLocaleLowerCase().trim() === 'plume') {
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
customElements.define('my-mission1', MyMission1)
