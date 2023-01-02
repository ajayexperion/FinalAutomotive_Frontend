// import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage/AuthPage';
import UserProfile from './pages/UserProfile/UserProfile';
import EmployeeDisplay from './pages/EmployeeDetails/EmployeeDetails';
import Loggedin from './pages/Loggedin';
import AddProduct from './pages/AddProduct/AddProduct';
import Inventory from './pages/Inventory/Inventory';
import RevenueReport from './pages/RevenueReport/RevenueReport';
import JobCard from './pages/JobCard/JobCard';
import StartingPageContent from './pages/StartingPageContent/StartingPageContent';
import Wrapper from './pages/Wrapper/Wrapper';

import EstimationDetails from './pages/EstimationDetails/EstimationDetails';
import Invoice from './pages/Invoice/Invoice';
import EmployeeSheetDisplay from './pages/EmployeeSheetDisplay/EmployeeSheetDisplay';

function App() {
  // const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Route path="/" exact>
        <StartingPageContent />
      </Route>
      <Wrapper>
        <Switch>

          <Route path="/employee/managerslist" component={EmployeeSheetDisplay} />
          <Route path="/" exact>
            <Loggedin />
          </Route>

          <Route path="/auth">
            <AuthPage />
          </Route>

          <Route path="/profile">
            <UserProfile />
          </Route>

          <Route path="/addProduct">
            <AddProduct />
          </Route>

          <Route path="/inventory">
            <Inventory />
          </Route>

          <Route path="/employeeDetails">
            <EmployeeDisplay />
          </Route>

          <Route path="/revenuereport">
            <RevenueReport />
          </Route>

          <Route path="/jobcard">
            <JobCard />
          </Route>

          <Route path="/estimationDetails">
            <EstimationDetails />
          </Route>

          <Route path="/invoice">
            <Invoice />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>

        </Switch>
      </Wrapper>
    </Layout>
  );
}

export default App;
