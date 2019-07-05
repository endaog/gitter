import { IMap } from 'models';

export interface Project {
  id: string;
  name: string;
  description: string;
}

export type ProjectMap = IMap<Project>;

export type Projects = Record<string, Project>;

export type ProjectsMap = IMap<Projects>;