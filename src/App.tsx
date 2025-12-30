import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'
import type { JSX } from 'react'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
