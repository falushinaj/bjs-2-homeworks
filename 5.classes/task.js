class PrintEditionItem {
    constructor(name,releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    set state(state) {
        if (this.state < 0) {
            this.state = 0; 
        } if (this.state > 100) {
            this.state = 100; 
        } else {
            return this._state = state;
        }
    }
    get state() {
        return this._state;
    }
}

PrintEditionItem.prototype.fix = function() {
    this.state = 1.5*this.state;
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );
   
//    console.log(sherlock.releaseDate); //2019
//    console.log(sherlock.state); //100
//    sherlock.fix();
//    console.log(sherlock.state); //100


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
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15