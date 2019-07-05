import * as AppModels from 'containers/App/models';

  export interface IAppScreenState { 
    query: string;
  }

  export interface IAppScreenActions {
    fetchProjectRequest: AppModels.ActionCreator.IFetchProject;
  }
  
  export interface IAppScreenSelectors {
  }
  
  export interface IAppScreenOwnProps {
    
  }
  
  export type IAppScreenProps = IAppScreenSelectors & IAppScreenActions & IAppScreenOwnProps;
  
  