class Link extends HTMLElement {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    connectedCallback() {
        if (!this.querySelector('a')) {
            this.append(document.createElement('a'))
        }
        this.update()

        this.querySelector('a').addEventListener('click', this.handleClick)
    }

    disconnectedCallback() {
        this.querySelector('a').removeEventListener('click', this.handleClick)
    }

    handleClick(event) {
        event.preventDefault()

        this.dispatchEvent(new CustomEvent('link-click', {
            detail: { href: this.getAttribute('href')},
            bubbles: true,
            composed: true
        }));
    }

    static get observedAttributes() {
        return ['href']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.update()
    }

    update() {
        const a = this.querySelector('a')

        if (!a) return

        if (!this.hasAttribute('href')) {
            a.setAttribute('href', this.getAttribute('href'))
        }
    }
}

export const registerArkLinkComponent = () => customElements.define('ark-link', Link)
