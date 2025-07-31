import { registerArkButtonComponent, registerArkLinkComponent } from './components'

const app = () => {
    registerArkButtonComponent()
    registerArkLinkComponent()
}

document.addEventListener('DOMContentLoaded', app)