import App from "./App";
import './index.css'

function ServerEntry(props: any) {
  return (
    <App data={props.data} />
  )
}

export { ServerEntry }

export async function fetchData() {
  return { user: 'UserName' }
}
