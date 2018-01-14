import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-datepicker';
import Container from './core/Container';

export default class Expense extends Component {
    render() {
        return (
                  <form className="form-horizontal span6">
                    <fieldset>
                      <legend>Payment</legend>

                      <div className="control-group">
                        <label className="control-label">Name of item</label>
                        <div className="controls">
                            <input id='expense-itemname' type="text" className="input-block-level" pattern="\w+ \w+.*" title="Please enter the name of the item purchased." required></input>
                        </div>
                    </div>

                    <div id='expense-price' className="control-group input-group">
                      <span className="input-group-addon">£</span>
                      <input type="text" className="form-control" placeholder="15"></input>
                    </div>

                      <div className="control-group">
                        <label className="control-label">Date of purchase</label>
                        <div className="input-group date">
                            <input type="text" id='date-field' className="form-control" defaultValue="12-02-2012" data-provide="datepicker"></input>
                            <div className="input-group-addon">
                                <span className="glyphicon glyphicon-th"></span>
                            </div>
                        </div>
                      </div>
                      <br></br>
                      <div className="input-group">
                        <div className="checkbox">
                          <input id="checkbox1" type="checkbox"></input>
                          <label htmlFor="checkbox1">
                            Taxable
                          </label>
                        </div>
                      </div>

                      <div className="form-actions">
                          <input className='btn btn-success' type='submit'></input>
                      </div>
                    </fieldset>
                </form>
        );
    }

    componentDidMount() {
        $('.input-group.date, #date-field').datepicker({todayBtn: 'linked'});
    }
}

