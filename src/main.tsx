import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import Starts from './Stars/Stars .tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Starts count={5}/>
  </StrictMode>,
)
