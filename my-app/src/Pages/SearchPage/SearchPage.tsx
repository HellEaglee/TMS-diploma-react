import { FC, useEffect, useMemo, useState } from "react";
import classNames from "classnames";

import styles from "./SearchPage.module.scss";
import Title from "../../Components/Title";
import { useDispatch, useSelector } from "react-redux";
import { BooksSelectors, getBooks } from "../../Redux/reducers/books";
import { BookItemProps } from "../../Types";
import BookCard from "../../Components/BookCard";

const SearchPage: FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const booksList = useSelector(BooksSelectors.getBooks);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const searchBooksElements = useMemo(() => {
    return booksList
      ?.filter((book) => book.title.toLowerCase().includes(query))
      .map((book: BookItemProps) => <BookCard key={book.isbn13} book={book} />);
  }, [booksList, query]);

  return (
    <div className={classNames(styles.searchContainer)}>
      <div className={classNames(styles.searchInputContainer)}>
        <input className={classNames(styles.searchInput)}
          type="text"
          onChange={(event: any) => setQuery(event.target.value.toLowerCase())}
          placeholder="Search"
        />
      </div>
      <Title text={query ? `'${query}' SEARCH RESULTS` : "SEARCH"} />
      <div className={classNames(styles.searchWrapper)}>
        {searchBooksElements.length !== 0
          ? searchBooksElements
          : `Your search - '${query}' - did not match any book. Please, try again.`}
      </div>
    </div>
  );
};

export default SearchPage;
