export type MockItem = {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
};

export type SectionItem = {
  title: string;
  data: MockItem[];
};
