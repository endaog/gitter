import React from 'react';
import { throttle } from 'lodash';

import { IAppScreenProps, IAppScreenState } from './models';

class AppScreen extends React.PureComponent<IAppScreenProps, IAppScreenState> {
  
  constructor(props: IAppScreenProps){
    super(props)

    this.state = {
      query: '',
      showTweets: false,
    }
  }

  private handleSearch = (event) => {
    this.setState({ query: event.target.value});
    this.onHandleSearch(event.target.value);
  }

  private onHandleSearch = throttle(
    (query: string) => {
      const { fetchProjectRequest } = this.props;
        fetchProjectRequest(query);
    },
    1000,
  );

  private handleSelect = (name : string) => {
    const { fetchTweetRequest } = this.props;
    this.setState({ query: name, showTweets: true }, () => {
      fetchTweetRequest(name);
    });
  }

  render() {
    const { query, showTweets } = this.state;
    const { projectList, tweetList } = this.props;

    return (
      <div>
        <h1>Github Tweets</h1>
        <input type="text" onChange={ this.handleSearch } value={ query } />
        <div>
        {projectList.valueSeq().map(project => (
          <div key={project.get('id')} onClick={ () => this.handleSelect(project.get('name')) }>
            {project.get('name')} - {project.get('description')}
            
          </div>
        ))}
       </div>

       <div> tweets
        {tweetList.valueSeq().map(tweet => (
          <div key={tweet.get('id')}>
            {tweet.get('tweet')}
          </div>
        ))}
       </div>
      </div>
    );
  }
}

export default AppScreen;
