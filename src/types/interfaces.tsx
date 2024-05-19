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
  typeTitle: string;
  children: string;
}

export interface IText {
  children: string;
  type: string;
}

export interface ILinks{
  children: string;
}

export interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  lesson_num: number,
  title: string,
  description: string,
  author: number
}