export type MockItem = {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
};

export const mockItems: MockItem[] = [
  { id: '1', nome: 'Camiseta Básica', categoria: 'Roupas', preco: 49.9 },
  { id: '2', nome: 'Tênis Esportivo', categoria: 'Calçados', preco: 199.9 },
  { id: '3', nome: 'Mochila Urbana', categoria: 'Acessórios', preco: 129.9 },
  { id: '4', nome: 'Garrafa Térmica', categoria: 'Casa', preco: 59.9 },
  { id: '5', nome: 'Fone Bluetooth', categoria: 'Eletrônicos', preco: 149.9 },
  { id: '6', nome: 'Mouse Sem Fio', categoria: 'Eletrônicos', preco: 89.9 },
  { id: '7', nome: 'Caderno Inteligente', categoria: 'Papelaria', preco: 39.9 },
  { id: '8', nome: 'Luminária de Mesa', categoria: 'Casa', preco: 79.9 },
];

export const sectionsItems: { title: string; data: string[] }[] = [
    { title: 'Frutas', data: ['Maçã', 'Banana', 'Laranja'] },
    { title: 'Legumes', data: ['Cenoura', 'Batata', 'Tomate'] },
    { title: 'Verduras', data: ['Alface', 'Espinafre', 'Couve'] },
  ];
