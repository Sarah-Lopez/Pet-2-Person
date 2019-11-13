// import FilterResults from 'react-filter-search';
 
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       value: ''
//     };
//   }
//   componentWillMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => this.setState({ data: json }));
//   }
//   handleChange = event => {
//     const { value } = event.target;
//     this.setState({ value });
//   };
//   render() {
//     const { data, value } = this.state;
//     return (
//       <div>
//         <input type="text" value={value} onChange={this.handleChange} />
//         <SearchResults
//           value={value}
//           data={data}
//           renderResults={results => (
//             <div>
//               {results.map(el => (
//                 <div>
//                   <span>{el.name}</span>
//                   <span>{el.email}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         />
//       </div>
//     );
//   }
// }

import React, { Component } from 'react'

class filterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breedFilter: ""
    }
  }
  
  handleChange = (event) => {
    this.setState({
      breedFilter: event.target.value
    })
    this.props.onChange(event.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Breed:<br /> </label> {/*put break after colon.*/}
        <input type="text" id="filter" 
          value={this.state.breedFilter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default filterForm














