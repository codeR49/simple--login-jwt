import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';


const data = [
    {id: 1, name: 'test1', age: '2', gender: 'male', email: 'test1@gmail.com', phoneNo: '9191919191'},
    {id: 2, name: 'test2', age: '5', gender: 'male', email: 'test2@gmail.com', phoneNo: '9191919192'},
    {id: 3, name: 'test3', age: '4', gender: 'male', email: 'test3@gmail.com', phoneNo: '9191919193'}
  ];
const columns = [{
    dataField: 'id',
    text: 'ID'
  }, {
    dataField: 'name',
    text: 'Name'
  }, {
    dataField: 'age',
    text: 'Age'
}, {
    dataField: 'gender',
    text: 'Gender'
}, {
    dataField: 'email',
    text: 'Email'
}, {
    dataField: 'phoneno',
    text: 'Phone No'
}];



class App extends Component {
    render() {
      return (
        <div className="App">
        <p className="Table-header">Basic Table</p>
         
        <BootstrapTable 
        striped
        hover
        keyField='id'
        keyField='id'
        data={ person }
        columns={ columns } 
        />
      </div>
      );
    }
}

export { App as TableView };