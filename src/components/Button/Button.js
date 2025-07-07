class Button extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.textContent = 'arkady-button'
    }

    disconnectedCallback() {}

    static get observedAttributes() {
        return [/* массив имён атрибутов для отслеживания их изменений */]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.update()
        // вызывается при изменении одного из перечисленных выше атрибутов
    }

    adoptedCallback() {
        // вызывается, когда элемент перемещается в новый документ
        // (происходит в document.adoptNode, используется очень редко)
    }

    update() {}
}

export const registerArkButtonComponent = () => customElements.define('ark-button', Button)
