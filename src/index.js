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


class Alden extends Component {
    render() {
        return (
            <Layout type="viewport">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Method}/>
                        <Route exact path='/service-number' component={ServiceNumber}/>
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
