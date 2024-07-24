export type TNodeData = {
  id: string;
  label: string;
  type: string;
  parent?: string;
};

export type TNode = {
  data: TNodeData;
};

const nodes: TNode[] = [
  { data: { id: 't1', label: 't1', type: 'question' } },
  {
    data: {
      id: 't1.c1',
      label: 't1.c1',
      type: 'question',
      parent: 't1',
    },
  },
  {
    data: {
      id: 't1.c2',
      label: 't1.c2',
      type: 'question',
      parent: 't1',
    },
  },
  { data: { id: 't2', label: 't2', type: 'answer' } },
  {
    data: {
      id: 't2.c1',
      label: 't2.c1 (view)',
      type: 'question',
      parent: 't2',
    },
  },
];

export default nodes;
