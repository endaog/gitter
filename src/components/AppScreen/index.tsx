import React from 'react';
import { debounce } from 'lodash';

import { IAppScreenProps, IAppScreenState } from './models';

class AppScreen extends React.PureComponent<IAppScreenProps, IAppScreenState> {
  
  constructor(props: IAppScreenProps){
    super(props)

    this.state = {
      query: ''
    }
  }

  handleSearch = (e) => {
    const val = e.target.value
    const { fetchProjectRequest } = this.props;

    this.setState({ query: val }, () => {
      // debounce(changeSearch(val), 250);
      fetchProjectRequest(val);
    })
  }

  render() {
    const { query } = this.state;

    return (
      <div> <input type="text" onChange={ this.handleSearch } value={ query } /></div>
    );
  }
}

export default AppScreen;
