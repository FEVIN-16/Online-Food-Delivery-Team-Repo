import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CustomerLogin from './Food/components/CustomerLogin';
import OwnerLogin from './Food/components/OwnerLogin';
import CustomerRegister from './Food/components/CustomerRegister';
import RestaurantRegister from './Food/components/RestaurantRegister';
import CustomerPayment from './Food/components/CustomerPayment';
import FoodItem from './Food/components/FoodItem';
import AddFoodItem from './Food/components/AddFoodItem';
import Food from './Food/components/Food';
import Cart from './Food/components/Cart';
import Payment from './Food/components/Payment';
import CustomerReview from './Food/components/CustomerReview';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/customerlogin"  component={CustomerLogin}/>
        <Route exact path="/ownerlogin"  component={OwnerLogin}/>
        <Route exact path="/customerregister"  component={CustomerRegister}/>
        <Route exact path="/restaurantregister"  component={RestaurantRegister}/>
        <Route exact path="/customerpayment"  component={CustomerPayment}/>
        <Route exact path="/fooditem"  component={FoodItem}/>
        <Route exact path="/addfooditem"  component={AddFoodItem}/>
        <Route exact path="/food"  component={Food}/>
        <Route exact path="/cart"  component={Cart}/>
        <Route exact path="/payment" component={Payment}/>
        <Route exact path="/customerreview" component={CustomerReview}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
