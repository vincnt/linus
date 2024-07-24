import { TNode } from './nodes';
import { TEdge } from './edges';

export interface TElements {
  nodes: TNode[];
  edges: TEdge[];
}

export interface GraphData {
  data: TElements
}
