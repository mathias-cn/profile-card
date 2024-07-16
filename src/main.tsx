import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProfileCard } from './profile-card/index.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>,
)
