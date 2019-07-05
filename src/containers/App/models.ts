import { IAction, ProjectsMap } from 'models';

export namespace State {
  export interface IProjectsMap extends ProjectsMap { }
  export interface IState extends IProjectsMap { }
}

export namespace Payload {

  export interface IFetchProject {
    name: string;
  }

  export interface IFetchProjectSuccess {
    projectList: Record<string, ProjectsMap>;
  }

  export interface IFetchProjectError {
    error: string;
  }

}

export namespace Action {
  export interface IFetchProject extends IAction<Payload.IFetchProject> { }
  export interface IFetchProjectSuccess extends IAction<Payload.IFetchProjectSuccess> { }
  export interface IFetchProjectError extends IAction<Payload.IFetchProjectError> { }
}

export namespace ActionCreator {
  export type IFetchProject = (
    name: string,
  ) => Action.IFetchProject;

  export type IFetchProjectSuccess = (
    projectList: Record<string, ProjectsMap>,
  ) => Action.IFetchProjectSuccess;

  export type IFetchProjectError = (
    error: string,
  ) => Action.IFetchProjectError;
}

export interface IAppProps {
  store?;
  history?;
}
