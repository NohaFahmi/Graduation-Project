//
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import  promiseMiddleware  from 'redux-promise';

import reducers from './reducers';
import Register from './containers/register-form';
import Home from './containers/Home';
import Header from './components/header';
//
//json-server port is localhost:3005

const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);
const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <Header />
            <Router>
                <div className='container'>
                    <Switch>

                        <Route path="/register" component ={Register} />
                        <Route path="/users" component ={Home} />
                        <Route path="/" exact component ={Home} />
                        <Route path="*" render={() => (
                            <h1 className="error">
                                404
                            </h1>
                        )} />

                    </Switch>
                </div>
                
            </Router>

        </Provider>
        
    )
}

export default App;