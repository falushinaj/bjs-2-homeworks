class PrintEditionItem {
    constructor(name,releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    set state (num) {
        if (num < 0) {
            this._state = 0; 
        } 
        if (num > 100) {
            this._state = 100; 
        } else {
            return this._state = num;
        }
    }
    get state () {
        return this._state;
    }
    fix() {
        this.state = 1.5*this.state;
    }  
}

// PrintEditionItem.prototype.fix = function() {
//     this.state = 1.5*this.state;
// }

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );
   
   console.log(sherlock.releaseDate); //2019
   console.log(sherlock.state); //100
   sherlock.fix();
   console.log(sherlock.state); //100


   class Magazine extends PrintEditionItem {
    constructor(name,releaseDate, pagesCount, state = 100, type) {
        super (name,releaseDate, pagesCount, state);
        this.type = "magazine";
    }
   }

   class Book extends PrintEditionItem {
    constructor(author, name,releaseDate, pagesCount, state = 100, type = "book") {
        super (name,releaseDate, pagesCount, state, type);
        this.author = author;
    }
   }

   class NovelBook extends Book {
    constructor(author, name,releaseDate, pagesCount, state = 100, type = "novel") {
        super (author, name,releaseDate, pagesCount, state, type);
    }
   }

   class FantasticBook extends Book {
    constructor(author, name,releaseDate, pagesCount, state = 100, type = "fantastic") {
        super (author, name,releaseDate, pagesCount, state, type);
    }
   }

   class DetectiveBook extends Book {
    constructor(author, name,releaseDate, pagesCount, state = 100, type = "detective") {
        super (author, name,releaseDate, pagesCount, state, type);
    }
   }

   const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
//   console.log(picknick.author); //"Аркадий и Борис Стругацкие"
//   picknick.state = 10;
//   console.log(picknick.state); //10
//   picknick.fix();
//   console.log(picknick.state); //15


//   ЗАДАЧА 2

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }
    set string(name) {
        if (typeof name === 'string') {
            this.name = name; 
        } else {
            console.log('Variable is not a string');
            return this._name = name;
        }
    }
    get string() {
        return this._name;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    } 

    findBookBy(type, value) {
        return this.books.find(book => book[type] == value) || null;
      }

       giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        if (book) {
          this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
       }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);

library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"   

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3