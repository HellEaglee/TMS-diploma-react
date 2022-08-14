export type BookItemProps = {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: PdfModel;
  favorite: boolean;
};

export type TabSwitcherProps = {
  options: { text: string; value: string }[];
  changeHandler: Function;
  type: "info" | "auth";
};

export type PdfModel = {
  chapter2: string;
  chapter5: string;
};

export type CartBookItemProps = {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: PdfModel;
  favorite: boolean;
};

export type CartSumProps = {
  price: number;
};

export type BookListType = Array<BookItemProps>;
