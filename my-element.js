// plugin : lit-html, es6-string-css

// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element'
// import { LitElement, html } from '@polymer/lit-element';

const styles = css`
:host {
    display: block;
    margin: auto;
    width: 350px;
    border: 6px solid #aa4e0c;
    padding: 19px;
    background: orange;
}

button,
dm-button {
    padding: 20px;
    margin: 5px;
    font-size: 3rem;
}     

section#code {
    text-align: center;
    font-size: 3rem;
    margin: 10px 0;
}

code {
    background: antiquewhite;
    padding: 5px;
    border: 7px solid firebrick;
    display: inline-block;
    width: 250px;
    text-align: center;
}

#erreur,
#succes {
    position: absolute;
    display: block;
    text-align: center;
    width: 350px;
    font-size: 3rem;
    font-family: sans-serif;
    top: 170px;
    padding: 20px 0;

    display: none;
}

#erreur {
    background: red;
    border: 4px solid #680707;
    color: white;

}
#succes {
    background: #74df7c;
    border: 4px solid #106a21;
    color: #064914;
}

.cadenas {
    font-size: 3rem;            
    padding: 30px 0;
}
`

// Extend the LitElement base class
class MyElement extends LitElement {
  //   foo = 'foo';

  render () {
    return html`

        Question
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        
        <!-- template content -->
        <!--p>Code ${this.code}</p-->
        
        <div id="erreur">
            <div>💣 Erreur! 💣</div>
            <div class="cadenas">🔒</div>
        </div>
        <div id="succes">
            <div>🎉 Bravo! 🎉</div>
            <div class="cadenas">🔓</div>
        </div>
        
        
        <section id="code">
            Code <code>&nbsp;${this.displayCode}&nbsp;</code>
        </section>
        
        <div>
            <button>💀</button>
            <button>👻</button>
            <button>👽</button>
        </div>
        <div>
            <button>🤖</button>
            <button>💩</button>
            <button>👂</button>
        </div>
        <div>
            <button>🐙</button>
            <button>🐞</button>
            <button>👀</button>
        </div>
        <!--div>
                      <dm-bouton>👃</dm-bouton> 
                      <dm-bouton>👣</dm-bouton>
                      <dm-bouton>👄</dm-bouton>
                  </div>
                  <div>
                          <dm-bouton><i class="fab fa-angellist"></i></dm-bouton> 
                          <dm-bouton><i class="fas fa-ambulance"></i></dm-bouton>
                          <dm-bouton><i class="fab fa-android"></i></dm-bouton>
                      </div-->
        
        `
    }

  constructor () {
    // Always call super() first
    super()
        this.code = []
        this.displayCode = ''

        // this.addEventListener('DOMContentLoaded', this.handleLoaded);
    }

  connectedCallback () {
    super.connectedCallback()
        // document.addEventListener('readystatechange', this.handleChange);


    }

  firstUpdated (changedProperties) {
    this.init()
  }

  init () {
    this.shadowRoot.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        this.code.push(b.innerText)
        this.displayCode = this.code.join('')

        setTimeout(() => {
          if (this.code.length === 4) {
            this.checkCode()
          }
        }, 0)
      })
    })
  }

  checkCode () {
    if (this.isBonCode()) {
      this.shadowRoot.querySelector('#succes').style.display = 'block'
    } else {
      this.shadowRoot.querySelector('#erreur').style.display = 'block'
      setTimeout(() => {
        this.shadowRoot.querySelector('#erreur').style.display = 'none'
        this.displayCode = ''
      }, 2000)
      this.code = []
    }
  }

  isBonCode () {
    const goodCode = ['💩', '👂', '👀', '🐞']

    for (let i = 0; i < this.code.length; i++) {
      console.log(this.code[i])
      if (this.code[i] !== goodCode[i])
        {return false}
    }
    return true
  }
  //   @property({type : String})  prop1 = 'Hello World';

  static get properties () {
    return {
      displayCode: {
        type: String
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
// Register the new element with the browser.
customElements.define('my-element', MyElement)
