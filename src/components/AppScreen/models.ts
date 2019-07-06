import * as AppModels from 'containers/App/models';

  export interface IAppScreenState { 
    query: string;
    showTweets: boolean;
  }

  export interface IAppScreenActions {
    fetchProjectRequest: AppModels.ActionCreator.IFetchProject;
    fetchTweetRequest: AppModels.ActionCreator.IFetchTweet;
  }
  
  export interface IAppScreenSelectors {
    projectList: AppModels.State.IProjectsMap;
    tweetList: AppModels.State.ITweetsMap;
  }
   
  export interface IAppScreenOwnProps {
    onElementClicked: any;
  }
  
  export type IAppScreenProps = IAppScreenSelectors & IAppScreenActions & IAppScreenOwnProps;
  
  