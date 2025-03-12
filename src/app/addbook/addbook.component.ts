import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  imports: [FormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent implements OnInit{
books: Book = new Book(0, '', '',0);
  isEditMode: boolean = false;
  
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['book']) {
      this.books = nav.extras.state['book'];
      debugger;
      this.isEditMode = true;
    }if(this.books.id == 0){
      this.isEditMode = false;
  }
  } 
  ngOnInit(): void {
    // Check if editing an existing book
    const state = history.state;
   if (state && state.book) {
      this.books = state.book;
     //  this.isEditMode = true;
    }
  }

 saveBook(): void {
   const books = JSON.parse(localStorage.getItem('books') || '[]');

   if (this.isEditMode) {
     // Update existing book
     const index = books.findIndex((p: Book) => p.id === this.books.id);
     if (index !== -1) {
       books[index] = this.books;
     }
   } else {
     // Add new book
     this.books.id = books.length > 0 ? Math.max(...books.map((p: Book) => p.id)) + 1 : 1;
     books.push(this.books);
   }

   // Save back to localStorage
   localStorage.setItem('books', JSON.stringify(books));
   this.router.navigate(['/booklist']); // Navigate back to book list
 }
}
