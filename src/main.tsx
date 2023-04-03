import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import CardDetailsProvider from "./context/CardDetailsProvider"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CardDetailsProvider>
      <App />
    </CardDetailsProvider>
  </React.StrictMode>
)
