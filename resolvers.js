const data = {
  authors: [
    {
      id: "1",
      name: "shaksham",
      bookIds: ["101"],
    },
    {
      id: "2",
      name: "dummy name",
      bookIds: ["102", "103"],
    },
  ],
  books: [
    {
      id: "101",
      title: "A new home",
      publishedYear: 2022,
      authorId: "1",
    },
    {
      id: "102",
      title: "A new home 2",
      publishedYear: 2052,
      authorId: "2",
    },
    {
      id: "103",
      title: "A new home 3",
      publishedYear: 2052,
      authorId: "2",
    },
  ],
};

export const resolvers = {
  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },
  Book: {
    author: (parent) => {
      return data.authors.find((author) => author.id === parent.authorId);
    },
  },
  Author: {
    books: (parent) => {
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },
};
