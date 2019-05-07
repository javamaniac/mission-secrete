// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
// import { LitElement, html } from '@polymer/lit-element';


// Extend the LitElement base class
class DmBouton extends LitElement {

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <style>
      button {
        padding: 30px;
        margin: 10px;
        font-size: 3rem;
      }
      </style>
      <!-- template content -->
      <button><slot></button>
    `;
  }
}
// Register the new element with the browser.
customElements.define('dm-bouton', DmBouton);
