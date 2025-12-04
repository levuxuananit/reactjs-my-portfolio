// Node modules 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Styles
import './index.css'
// Components
import { App } from "@/App"
import {Sidebar} from "@/components/ui/Sidebar"
import { FloatingMenu } from '@/components/ui/FloatingMenu'
import { Profile } from '@/components/ui/Profile'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <div className='min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10 relative z-10'>
    <Sidebar/>
    <FloatingMenu/>
    <Profile/>
    <App />
    </div>
  </StrictMode>,
)
