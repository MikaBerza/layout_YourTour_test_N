// функция для генерации id
export const generateId = (): string =>
  Math.round(Math.random() * 100000000000000).toString(16);
