import Styled from './style.jsx';
import './App.css';

import { Switch, Route, Redirect } from 'wouter';

//Paginas importadas
import Login from './pages/Login/index.jsx';
import Register from './pages/Register/index.jsx';
import Panel from './pages/Panel/index.jsx';
import Suppliers from './pages/Suppliers/index.jsx';
import SuppliersNew from './pages/SuppliersNew/index.jsx';
import NewProductsPage from './pages/ProductsNew/index.jsx';
import Modal from './pages/Modal/index.jsx';

function App() {

  return (
    <>

      <Styled.MainContain>
        <Styled.ContainerPage>

          <Switch>


            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/panel" component={Panel} />
            <Route path="/suppliers" component={Suppliers} />
            <Route path="/suppliersnew" component={SuppliersNew} />
            <Route path="/productsnew" component={NewProductsPage} />
            <Route path="/logOut" component={Modal} />


            <Redirect to="/login"/>

          </Switch>

        </Styled.ContainerPage>
      </Styled.MainContain>

    </>
  )
}

export default App
