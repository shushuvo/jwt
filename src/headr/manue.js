import React from "react";


class Manue extends React.Component {
  state ={
    change:false,
  }
    render() {
     
      var display = e=> {
        this.setState({change:!this.state.change});
      }
      let x = this.state.change;
      return (
        <>
        <button onClick={display}>{x?<i class="fa fa-window-close"/>:<i class="fa fa-bars"/>}</button>
        {x && (        
        <ul> 
            <li>Home</li>
            <li>Items</li>
            <li>Office</li>
            <li>Deals</li>
            <li>Offers</li>
            <li>Locations</li>
        </ul>)}
        </>
      );
    }
  }
  
  export default Manue;
  