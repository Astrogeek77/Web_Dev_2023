const sideLinksTemplate = document.createElement('template')
sideLinksTemplate.innerHTML = `

<style>
    /* Background Styles Only */

    @import url('https://fonts.googleapis.com/css?family=Raleway');

    .side-links {
    font-family: Raleway, sans-serif;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 9999;
    }

    .side-link i {
    display: none;
    }

    .side-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 14px !important;
    color: white;
    width: 120px;
    padding: 5px 0;
    border-radius: 10px;
    transition: all 0.5s;
    }

    .side-link:hover,
    .side-link:active,
    .side-link:focus {
    /* border: 1px solid #fefefe; */
    transform: scale(1.05);
    }

    .side-link-website {
    background-color: #f2fa;
    }

    .side-link-linkedin {
    background-color: #1da1f2aa;
    }

    .side-link-github {
    background-color: #6e5494aa;
    }

    .side-link-text {
    /* margin-left: 10px; */
    /* font-size: 18px; */
    }

    .side-link-icon {
    color: white;
    /* font-size: 30px; */
    }

    @media (max-width: 600px) {
    html {
        padding-bottom: 50px;
    }

    .side-links {
        /* bottom: 0;
        left: 0;
        right: auto;
        top: auto; */
        inset: auto auto 0 0;

        display: flex;
        flex-direction: row;
        gap: 0.5em;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        width: 100%;
        padding: 10px 0;

        background-color: #000a;
    }

    .side-link {
        align-self: center;
        margin-bottom: 0;
    }
    }
    </style>

    <!-- Side Links Only -->
    <div class="side-links">
      <a
        href="https://igautamjain.netlify.app"
        target="_blank"
        class="side-link side-link-website"
      >
        <i class="fab fa-website-square side-link-icon"></i>
        <span class="side-link-text">View Portfolio</span>
      </a>
      <a
        href="https://github.com/astrogeek77"
        target="_blank"
        class="side-link side-link-github side-link-icon"
      >
        <i class="fab fa-github-square"></i>
        <span class="side-link-text">View GitHub</span>
      </a>
      <a
        href="https://linkedin.com/in/astrogeek77"
        target="_blank"
        class="side-link side-link-linkedin"
      >
        <i class="fab fa-linkedin-square side-link-icon"></i>
        <span class="side-link-text">View Linkedin</span>
      </a>
    </div>
`

class SideLinks extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super()
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(sideLinksTemplate.content)
  }
}

customElements.define('sidelinks-component', SideLinks)
