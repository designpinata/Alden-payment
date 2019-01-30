import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/global/global.scss';
import * as serviceWorker from './serviceWorker';

// Components 
import Layout from './Components/Grid'
import Footer from './Components/Footer';
// Pages
import Method from './Views/Method'
import ServiceNumber from './Views/ServiceNumber';
import ServiceName from './Views/ServiceName';
import Payment from './Views/Payment'
import RFC from './Views/RFC';
import SuccessPayment from './Views/SuccessPayment';
import SuccessRFC from './Views/SuccessRFC';


class Alden extends Component {
    render() {
        return (
            <Layout type="viewport">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Method}/>
                        <Route exact path='/success' component={SuccessPayment}/>
                        <Route exact path='/rfc' component={RFC}/>
                        <Route exact path='/success-rfc' component={SuccessRFC}/>
                        <Route exact path='/service-number' component={ServiceNumber}/>
                        <Route exact path='/service-name' component={ServiceName}/>
                        <Route exact path='/payment' component={Payment}/>
                        <Route component={()=> (<h1>Nothing here!</h1>)}/>
                    </Switch>
                </BrowserRouter>
                <Footer />
            </Layout>
        )
    }
}


ReactDOM.render(<Alden />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
