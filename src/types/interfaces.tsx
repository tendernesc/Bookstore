export interface IButton {
  children: string;
  isDisabled: boolean;
  typeButton: string;
}

export interface IInput {
  title: string;
  isDisabled: boolean;
  type: string;
  placeholder: string;
}

export interface ITitle {
  children: string[] | string;
  typeTitle: string;
}

export interface IText {
  children: string;
  type: string;
}

export interface IBooks {
  id: number,
  image: string,
  text: string,
  date: string,
  lesson_num: number,
  title: string,
  description: string,
  author: number,
  isbn: string;
}

export interface ILinks{
  children: string;
}

export interface IBook {
  [x: string]: any;
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
  author: string; 
}

export interface IBooksResponse {
  error: string;
  total: string;
  page: string;
  books: IBook[];
}

export interface IBooksProps {
  currentPage: number;
  books: IBook[]; 
  totalPages: number;
}

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
