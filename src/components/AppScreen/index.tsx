import React from 'react';
import { debounce } from 'lodash';

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
    this.setState({ query: event.target.value, showTweets: false});
    this.onHandleSearch(event.target.value);
  }

  private onHandleSearch = debounce(
    (query: string) => {
      const { fetchProjectRequest } = this.props;
        fetchProjectRequest(query);
    },
    200,
  );

  private handleSelect = (name : string) => {
    const { fetchTweetRequest } = this.props;
    this.setState({ query: name, showTweets: true }, () => {
      fetchTweetRequest(name);
    });
  }

  private renderMatches = (): JSX.Element => {
    const { projectList } = this.props;
    return projectList && projectList.size > 0 && (
      <div> 
        {projectList.valueSeq().map(project => (
          <div key={project.get('id')} onClick={ () => this.handleSelect(project.get('name')) }>
            {project.get('name')} - {project.get('description')}
          </div>
        ))}
      </div>
    );
  }

  private renderTweets = (): JSX.Element => {
    const { tweetList } = this.props;
    return tweetList && tweetList.size > 0 && (
      <div> 
        <h2>Tweets</h2>
        {tweetList.valueSeq().map(tweet => (
          <div key={tweet.get('id')}>
            {tweet.get('tweet')}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { query, showTweets } = this.state;
    return (
      <div>
        <h1>Github Tweets</h1>
        <input type="text" onChange={ this.handleSearch } value={ query } />
        {!showTweets && this.renderMatches()} 
        {showTweets && this.renderTweets()}
      </div>
    );
  }
}

export default AppScreen;
