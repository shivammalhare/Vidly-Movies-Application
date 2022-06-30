import React, { Component } from 'react';

class Counter extends Component {
  state= {
    count:0,
    // imgurl:'https://picsum.photos/200'
    tags:['Shivam','Saurabh','Raj'] 
  };
  styles = { 
    fontSize: 20,
    fontWeight: "bold"
  };

  renderTags() {
     if(this.state.tags.length=== 0) return <p>There are no tags!</p>;
     return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    // 

  }
  handleIncrement = product => {
      console.log(product);
      this.setState({count: this.state.count + 1 });
}

  // doHandleIncrement= () => {
 
  //   this.handleIncrement({id:1});

  // }
  render() {
    // let classes = this.getBadgeClasses();
    

    return(
      <div>
        <span style = {this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* <img src= {this.state.imgurl} alt="" srcset="" /> */}
        <button onClick={ () => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
        
        <ul>
        {this.state.tags.length === 0 && 'Please create a new tag!'}
          {this.renderTags() }
          </ul>
        </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const{ count} = this.state;
     return count === 0 ? 'Zero' : count;
   }
}
export default Counter;