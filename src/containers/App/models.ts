import Immutable from 'Immutable';

import * as Models from 'models';

export namespace State {
  type StateType = {
    projectList: IProjectsMap;
    tweetList: ITweetsMap;
  };

  export type IProjectMap = Models.ProjectMap;
  export type IProjectsMap = Immutable.Map<string, IProjectMap>;

  export type ITweetMap = Models.TweetMap;
  export type ITweetsMap = Immutable.Map<string, ITweetMap>;

  export interface IState extends Models.IMap<StateType> { }
}

export namespace Payload {

  export interface IFetchProject {
    name: string;
  }

  export interface IFetchProjectSuccess {
    projectList: Record<string, Models.ProjectMap>;
  }

  export interface IFetchProjectError {
    error: string;
  }

  export interface IFetchTweet {
    name: string;
  }

  export interface IFetchTweetSuccess {
    tweetList: Record<string, Models.TweetMap>;
  }

  export interface IFetchTweetError {
    error: string;
  }

}

export namespace Action {
  export interface IFetchProject extends Models.IAction<Payload.IFetchProject> { }
  export interface IFetchProjectSuccess extends Models.IAction<Payload.IFetchProjectSuccess> { }
  export interface IFetchProjectError extends Models.IAction<Payload.IFetchProjectError> { }
  export interface IFetchTweet extends Models.IAction<Payload.IFetchTweet> { }
  export interface IFetchTweetSuccess extends Models.IAction<Payload.IFetchTweetSuccess> { }
  export interface IFetchTweetError extends Models.IAction<Payload.IFetchTweetError> { }
}

export namespace ActionCreator {
  export type IFetchProject = (
    name: string,
  ) => Action.IFetchProject;

  export type IFetchProjectSuccess = (
    projectList: Record<string, Models.ProjectMap>,
  ) => Action.IFetchProjectSuccess;

  export type IFetchProjectError = (
    error: string,
  ) => Action.IFetchProjectError;

  export type IFetchTweet = (
    name: string,
  ) => Action.IFetchTweet;

  export type IFetchTweetSuccess = (
    tweetList: Record<string, Models.TweetMap>,
  ) => Action.IFetchTweetSuccess;

  export type IFetchTweetError = (
    error: string,
  ) => Action.IFetchTweetError;
}

export interface IAppProps {
  store?;
  history?;
}
