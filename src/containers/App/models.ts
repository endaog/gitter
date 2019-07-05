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
    name: string;
  }

  export interface IFetchProjectError {
    name: string;
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
    name: string,
  ) => Action.IFetchProjectSuccess;

  export type IFetchProjectError = (
    name: string,
  ) => Action.IFetchProjectError;
}

export interface IAppProps {
  store?;
  history?;
}
