export type BookModel = {
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

export type PdfModel = {
  chapter2: string;
  chapter5: string;
};

export type BookListType = Array<BookModel>;
