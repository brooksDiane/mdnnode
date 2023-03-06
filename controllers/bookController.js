const { books, authors, bookInstances, genres } = require('../dbConnection');
const { ObjectId } = require('mongodb');

const async = require('async');

exports.index = async (req, res) => {
  const results = {};
  results.book_count = await books.countDocuments();
  results.book_instance_count = await bookInstances.countDocuments();
  results.book_instance_available_count = await bookInstances.countDocuments({
    status: 'Available',
  });
  results.author_count = await authors.countDocuments();
  results.genre_count = await genres.countDocuments();

  res.render('index', {
    title: 'Local Library Home',
    data: results,
  });
};

// Display list of all books.
exports.book_list = async function (req, res, next) {
  let list_books = await books
    .find({}, { projection: { title: 1, author: 1 } })
    .sort({ title: 1 })
    .toArray();
  list_books.forEach(async (book) => {
    book.author = await authors.findOne({ _id: new ObjectId(book.author) });
    book.authorName = book.author.name;
  });
  res.render('book_list', { title: 'Book List', book_list: list_books });
};

// Display detail page for a specific book.
exports.book_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
};

// Display book create form on GET. 
exports.book_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Book update POST');
};
