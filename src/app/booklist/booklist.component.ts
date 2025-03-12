import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-booklist',
  imports: [],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
books:Book[]=[];

constructor(private router: Router) {}

  ngOnInit(): void {
    // Load books from localStorage
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
  }

  // Navigate to edit page
  editBook(book: Book): void {
    const id = book.id;
    this.router.navigate(['addbook'], { state: { book } });
  }

  // Delete book and update localStorage
  deleteBook(book: Book): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.books = this.books.filter((p) => p.id !== book.id);
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }
  addNewBook(): void {
    this.router.navigate(['/addbook'], { state: { book: new Book(0, '', '',0) } });
  }
}
