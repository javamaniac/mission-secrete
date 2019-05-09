// plugin : lit-html, es6-string-css

import { LitElement, html, css } from 'lit-element'
import { cssCommun } from './cssCommun'

const styles = css`
  ${cssCommun}
  :host {
  }
`

class MyFin extends LitElement {
  render () {
    return html`
      <h1></h1>
      <div>
          <h1>Félicitations!</h1>
          <!-- <img src="images/savantFou.png" align="right"> -->
          <p>Vous avez réussi à nous sauver!!!!.</p>
          <p>Merci</p>
          <p>Plumo, Jujube, Kiki, Sonette, Funky, Crokou, et Tousfus</p>
      </div>
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
customElements.define('my-fin', MyFin)
