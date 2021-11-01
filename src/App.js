import './App.css'
import Home from './pages/Home'
import Team from './pages/Team'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import ParticlesBackground from './components/ParticlesBackground'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container style={{ maxHeight: '95vh', overflow: 'auto' }}>
          <Switch>
            <Route exact path={['/home', '/', '']}>
              <Home />
            </Route>
            <Route exact path={'/team'}>
              <Team style={{ position: 'relative' }} />
            </Route>
            <Route exact path={'/contact'}>
              <Contact />
            </Route>
            <Route exact path={''}>
              <PageNotFound />
            </Route>
          </Switch>
        </Container>
      </Router>
      <ParticlesBackground />
    </div>
  )
}

export default App
