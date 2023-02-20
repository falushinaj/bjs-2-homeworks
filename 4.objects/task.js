function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  let student1 = new Student("Василиса", "женский", 19);
  let student2 = new Student("Артём", "мужской", 25);

  // console.log(student1);
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }

  student1.setSubject("Algebra");
  student2.setSubject("Geometry");

  // console.log(student1);
  // console.log(student2);
  
  Student.prototype.addMarks = function (...marksToAdd) {
    if (this.marks !== undefined) {     
      this.marks = marksToAdd;
    } 
  }
  
  student1.addMarks(4, 5, 4, 5);
  // console.log(student1);


  Student.prototype.getAverage = function () {
    if (this.marks === undefined) {
      return 0;
    } if (this.marks.length <= 0) {
      return 0;
    }  else {
      let marksSum = this.marks.reduce((sum,element) => (sum + element));
      let rezalt = marksSum / this.marks.length;
      return rezalt; 
      }  
  }
 
  // console.log(student1.getAverage()); // 0
  // console.log(student1.getAverage()); // 4.5


  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
  
  student2.exclude('плохая учёба')

  console.log(student1);
  // {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
 
  console.log(student2)
  // {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}