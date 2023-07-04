import Styled from './style.jsx';
import './App.css';

import { Switch, Route, Redirect } from 'wouter';

//Paginas importadas
import Login from './pages/Login/index.jsx';
import Register from './pages/Register/index.jsx';
import Panel from './pages/Panel/index.jsx';

function App() {

  return (
    <>

      <Styled.MainContain>
        <Styled.ContainerPage>
        
          <Switch>
          
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/panel" component={Panel} />

            <Redirect to="/login"/>

          </Switch>
          
        </Styled.ContainerPage>
      </Styled.MainContain>
      
    </>
  )
}

export default App
