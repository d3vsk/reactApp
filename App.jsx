import React from 'react';

var Search = React.createClass({
	render: function(){
		return(
			<input type="text" value={this.props.searchString} onChange={this.props.updateStateProp} placeholder="Type here" />
		);
	}
});

var List = React.createClass({
	render: function() {
		return ( <li>{this.props.list.name}</li> );
	}
});

var App = React.createClass({
	getInitialState : function(){
		return {searchString : ''};
	},

	handleChange : function(e){
		this.setState({searchString: e.target.value})
	},

	render: function() {
		var lists = this.props.items,
			searchString = this.state.searchString.trim().toLowerCase();

		if(searchString.length > 0){
			lists = lists.filter(function(l){
				return l.name.toLowerCase().match(searchString);
			});
		}

		return <div>
	            <Search searchString={this.state.searchString} updateStateProp={this.handleChange}></Search>
	            	<ul>
			            {
			            	lists.map(
			            			(list, i) => <List list={list} key={i}></List> )
			            }	
	            	</ul>            
	        </div>;
	}	
});

export default App;