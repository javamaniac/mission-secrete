// plugin : lit-html, es6-string-css

import { LitElement, html, css } from 'lit-element'
import { cssCommun } from './cssCommun'

const styles = css`
  ${cssCommun}
  :host {
  }
`

class MyMission0 extends LitElement {
  render () {
    return html`
      <h1></h1>
      <div>
          <h1>À l'aide!</h1>
          <img src="images/savantFou.png" align="right">
          <p>Un savant fou du nom de Docteur Krüel nous a kidnappé pour faire ses expériences démoniaques.</p>
          <p>Pitié, venez nous sauver.</p>
          <p>Nous avons réussi à laisser des indices pour vous permettre de nous sauver.</p>
          <p>Vous n'avez que 60 minutes sinon, nous n'existerons plus.</p>
          <p>Merci et bonne chance</p>
          <p>Plumo, Jujube, Kiki, Sonette, Funky, Crokou, et Tousfus</p>
      </div>
      <form>
        <input type="submit" @click=${this.suite} value="Commencer">
      </form>
    `
  }

  suite () {
    document.location = '#my-mission1'
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
customElements.define('my-mission0', MyMission0)
