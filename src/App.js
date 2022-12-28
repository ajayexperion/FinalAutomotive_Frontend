// import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthForm/AuthPage';
// import HomePage from './pages/HomePage';
import UserProfile from './pages/UserProfile/UserProfile';
// import HomePage from './pages/HomePage';
// import AuthContext from './store/auth-context';
import Loggedin from './pages/Loggedin/Userloggedin';
import EmployeeDisplay from './pages/EmployeeDetails/EmployeeDetails';
import EstimationPage from './pages/Estimation/EstimationDetails';
import AddProduct from './pages/AddProduct/AddProduct';
import Inventory from './pages/ProductDetails/Inventory';
import RevenueReport from './pages/RevenueReport/RevenueReport';
import JobCard from './pages/JobCard/JobCard';
import Invoice from './pages/BillGeneration/invoice';
import SheetDisplay from './pages/EmployeeDisplay/SheetDisplay';
import StartingPageContent from './pages/StartingPage/StartingPageContent';
import Wrapper from './pages/Wrapper/Wrapper';



function App() {
  // const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Route path='/' exact>
            <StartingPageContent />
          </Route>
      <Wrapper>
      <Switch>
      

      <Route path="/employee/managerslist" component={SheetDisplay}/>
       
          

          <Route path='/' exact>
            <Loggedin />
          </Route>
        
        
          <Route path='/auth'>
            <AuthPage />
          </Route>
        
        <Route path='/profile'>
            <UserProfile />
        </Route>

        <Route path='/addProduct'>
            <AddProduct />
        </Route>

        <Route path='/inventory'> 
            <Inventory />
          </Route>

        <Route path='/employeeDetails'>
            <EmployeeDisplay />
        </Route>

        <Route path='/revenuereport'>
            <RevenueReport />
        </Route>

        <Route path='/jobcard'>
            <JobCard/>
        </Route>

        <Route path='/estimationDetails'>
            <EstimationPage/>
        </Route>

        <Route path='/invoice'>
            <Invoice/>
        </Route>

        <Route path='*'>
          <Redirect to='/' />
        </Route>
       
      </Switch>
      
      </Wrapper>
    </Layout>
  );
}

export default App;
