import React from 'react';
import { debounce } from 'lodash';

import { IAppScreenProps, IAppScreenState } from './models';

class AppScreen extends React.PureComponent<IAppScreenProps, IAppScreenState> {
  
  constructor(props: IAppScreenProps){
    super(props)

    this.state = {
      query: '',
      showTweets: false,
      showMatches: false,
    }
  }

  private handleSearch = (event) => {
    const query: string = event.target.value;
    this.setState({ query, showTweets: false, showMatches: query.length > 0});
    this.onHandleSearch(query);
  }

  private onHandleSearch = debounce(
    (query: string) => {
      const { fetchProjectRequest } = this.props;
        fetchProjectRequest(query);
    },
    500,
  );

  private handleSelect = (name : string) => {
    const { fetchTweetRequest } = this.props;
    this.setState({ query: name, showTweets: true, showMatches: false }, () => {
      fetchTweetRequest(name);
    });
  }

  private renderMatches = (): JSX.Element => {
    const { projectList } = this.props;
    return projectList && projectList.size > 0 && (
      <div className="container mx-auto flex flex-col items-center"> 
        {projectList.valueSeq().map(project => (
          <div className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-grey-darker" key={project.get('id')} onClick={ () => this.handleSelect(project.get('name')) }>
            <p className="font-medium text-sm text-grey-darkest font-semibold">{project.get('name')}</p>
            <small className="text-grey-dark text-xs ">{project.get('description')}</small>
          </div>
        ))}
      </div>
    );
  }

  private renderTweets = (): JSX.Element => {
    const { tweetList } = this.props;
    return tweetList && tweetList.size > 0 && (
      <div className="container mx-auto max-h-half md:pt-8 flex flex-col items-center">
        {tweetList.valueSeq().map(tweet => (
          <div key={tweet.get('id')} className="font-sans rounded border px-6 py-4 max-w-md">
            <div className=" mt-3 mb-1 leading-normal text-lg">{tweet.get('tweet')}</div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { query, showTweets, showMatches } = this.state;
    return (
      <div className="container pt-24 md:pt-24 px-6 mx-auto flex flex-wrap flex-col md:flex-row">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-blue-400 font-bold text-6xl pb-8 lg:pb-6 text-center md:text-left fade-in">Gitter</p>
          <input onChange={ this.handleSearch } className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-grey-darker" type="search" placeholder="Search..." value={ query }></input>
        </div>
        {showMatches && this.renderMatches()} 
        {showTweets && this.renderTweets()}
      </div>
    );
  }
}

export default AppScreen;
