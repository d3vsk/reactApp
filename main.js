import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'nexus 7'},
  {category: 'Computer', price: '$199.99', stocked: true, name: 'monitor'},
  {category: 'Computer', price: '$99', stocked: true, name: 'cpu'},  
  {category: 'Computer', price: '$100', stocked: true, name: 'ram'}
];


  var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
  ];

  var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];


ReactDOM.render(<App items={libraries} />, document.getElementById('app'));
//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<App products={PRODUCTS} />, document.getElementById('app'));

