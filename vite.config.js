import { defneConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defneConfig ({
    base: "/movieapp/",
    plugins: [react()]
})