import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import Expense from './Expense';
import Dashboard from './Dashboard';

export default class Content extends Component {
    render() {
        return (
            <div className="container">
              <div className="row">
                  <div className="span12">
                    <main>
                        <Switch>
                          <Route exact path='/' component={Dashboard}/>
                          <Route path='/expense' component={Expense}/>
                        </Switch>
                    </main>
                  </div>
              </div>
           </div>
        );
    }
}

