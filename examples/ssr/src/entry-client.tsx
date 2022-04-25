import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import App from "./App";

async function fetchData() {
  return { user: 'UserName' }
}


async function main() {
  // @ts-ignore
  const data = window.__SSR_DATA__ ?? await fetchData()
  ReactDOM.hydrate(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

main()
