import { DeepIMap } from './redux/DeepIMap';

export interface Project {
  id: string;
  name: string;
  description: string;
}

export type ProjectMap = DeepIMap<Project>;