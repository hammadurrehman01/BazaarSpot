
import { lazy } from 'react';
import './App.css'
const Router = lazy(()=> import('./router/Router'));

function App() {
  return (
    <div >
      <Router />
    </div>
  )
}

export default App;
