import "./BookList.css"

function BookList() {
  const books = [
    {
      id: 1,
      title: 'JavaScript—The Comprehensive Guide',
      author: '', //Philip Ackermann
      isbn: '978-3836286299',
      rating: 5,
    },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Robert Martin',
      isbn: '978-0132350884',
      rating: 2
    },
    {
      id: 3,
      title: 'Design Patterns',
      author: 'Erich Gamma',
      isbn: '978-0201633610',
      rating: 5,
    },
  ]

  if (books.length === 0) {
    return (
      <>
        <div>
          <h3>BOOKS NOT FOUND!</h3>
        </div>
      </>
    )
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author ? book.author : "Unkown"}</td>
              <td>{book.isbn}</td>
              <td>{book.rating && '*'.repeat(book.rating)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default BookList