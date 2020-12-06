// Table Data
var TableData = React.createClass({ displayName: "TableData",
  render: function () {
    return (
      React.createElement("p", null, " ", this.props.data, " "));

  } });


// Table Element
var TableTitle = React.createClass({ displayName: "TableTitle",
  render: function () {
    return (
      React.createElement("div", null,
      React.createElement("h2", null, " ", this.props.title)));


  } });


var SearchMatch = React.createClass({ displayName: "SearchMatch",
  render: function () {
    return (
      React.createElement("div", null,
      React.createElement("p", null, " Match: ", this.props.match)));


  } });


// Table
var Table = React.createClass({ displayName: "Table",

  render: function () {

    // We need to get each row and store it in an array
    var rowsTitle = [];
    var search = [];
    var searchterm = this.props.searchTerm; // need this or it doesnt work
    var key = '';
    this.props.data.forEach(function (row) {
      if (row.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1 &&
      row.tags.toLowerCase().indexOf(searchterm.toLowerCase()) === -1)

      return;

      // need to grab the correct match
      if (row.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1) {
        var m = row.tags.toLowerCase().split(' ');
        for (var i in m)
        if (m[i].indexOf(searchterm.toLowerCase()) !== -1)
        key = m[i];
      } else {
        key = row.title.toLowerCase();
      }



      rowsTitle.push(React.createElement(TableTitle, { title: row.title }));
      if (searchterm != '')
      rowsTitle.push(React.createElement(SearchMatch, { match: key }));
      rowsTitle.push(React.createElement(TableData, { data: row.content }));


    });

    // Then render all. Render using childs. Send them prop.title and prop.data
    return (
      React.createElement("div", null,
      rowsTitle));


  } });


// Search
var Search = React.createClass({ displayName: "Search",

  filterList: function (event) {
    this.props.userInput(event.target.value);
  },

  render: function () {
    return (
      React.createElement("input", { type: "text",
        placeholder: "Start Typing",
        value: this.props.searchTerm,
        onChange: this.filterList, autoFocus: true }));


  } });


// App
var App = React.createClass({ displayName: "App",

  getInitialState: function () {
    return {
      filterText: '',
      filterText2: '' };

  },

  handleUserInput: function (filter) {
    this.setState({
      filterText: filter });

  },

  render: function () {

    return (
      React.createElement("div", null,
      React.createElement(Search, { searchTerm: this.state.filterText, userInput: this.handleUserInput }),
      React.createElement(Table, { searchTerm: this.state.filterText, data: this.props.data })));


  } });


// JSON
var DATA = [{
  "title": "Binding",
  "tags": "Binding Hiding Miding Sliding SAVE",
  "content": "This is the binding content area where information about binding is shown" },
{
  "title": "Constant",
  "tags": "Math bath slather calf save",
  "content": "This is the Constant content area where information about Constant is shown" },
{
  "title": "Numbers",
  "tags": "Happy birthday sir and maam",
  "content": "This is the Numbers content area where information about Numbers is shown" }];


// Render
React.render(React.createElement(App, { data: DATA }), document.getElementById("app"));
View Babel Code

Resources