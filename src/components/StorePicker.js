import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  
  goToStore = (e) => {
    e.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required defaultValue={getFunName()} ref={this.myInput}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;