import React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    domain="dev-biad3wqkuebedujx.us.auth0.com"
    clientId="puBoPekx4ERJg0S7Ui88134bteosjs3g"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
)
