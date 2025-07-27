import { registerArkButtonComponent } from './components'
import './styles/main.css'

const app = () => {
    registerArkButtonComponent()
}

document.addEventListener('DOMContentLoaded', app)