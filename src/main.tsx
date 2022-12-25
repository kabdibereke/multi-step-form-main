import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FormProvider } from './store/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FormProvider>
      <App />
  </FormProvider>
)
