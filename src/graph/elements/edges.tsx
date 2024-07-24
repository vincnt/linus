import { v4 } from 'uuid';
import { TNode } from './nodes';

interface IEdgeBasic {
  source: TNode['data']['id'];
  target: TNode['data']['id'];
  id: string;
}

interface IEdgeWithLabelAndType extends IEdgeBasic {
  label: string;
  type: 'labeled';
}

interface IEdgeWithOutLabelAndType extends IEdgeBasic {
  label?: never;
  type?: never;
}

export type TEdgeData = IEdgeWithOutLabelAndType | IEdgeWithLabelAndType;
export type TEdge = {
  data: TEdgeData;
};

const edges: TEdge[] = [
  {
    data: {
      id: v4(),
      source: 't1.c1',
      target: 't2.c1',
    },
  },
  {
    data: {
      id: v4(),
      source: 't1.c2',
      target: 't2.c1',
      type: 'labeled',
      label: 'testlabel',
    },
  },
];

export default edges;
