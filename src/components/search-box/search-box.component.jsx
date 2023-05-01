import { Component } from 'react';
import './search-box.styles.css'

export default class SearchBox extends Component {

  render () {

    const { onSearchChange, className, type, placeholder } = this.props;

    return (
      <div>
        <input 
          className={className}
          type={type}
          placeholder={placeholder}
          onChange={onSearchChange}
        />
      </div>
    )
  }
}