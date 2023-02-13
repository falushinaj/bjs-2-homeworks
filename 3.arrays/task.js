function compareArrays(arr1, arr2) { 
    if (arr1.length !== arr2.length) {
        return false;
    }
    if (arr1.every((elem,i) => elem === arr2[i])) {
        return true;
    } else {
        return false;
    }
  }    
  // console.log(compareArrays([8, 9], [6])); 
  // console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); 
  // console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); 
  // console.log(compareArrays([1, 2, 3], [2, 3, 1])); 
  // console.log(compareArrays([8, 1, 2], [8, 1, 2])); 
  
  const people = [
    {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
    {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
    {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
    {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
    {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
    {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
    {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
    {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
    {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
    {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
    {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
    {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
    {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
    {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
  ]
  
  function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) {
      return 00;
    }
    if (gender === "мужской" || gender === "женский") {
      let rezalt = (users.filter(element => element.gender === gender).map(element => element.age).reduce((sum,element) => (sum + element))) / (users.filter(element => element.gender === gender)).map(element => element.age).length; 
      return rezalt;
    } 
    return 0;  
  }
  console.log(getUsersNamesInAgeRange(people, "мужской"));
  console.log(getUsersNamesInAgeRange(people, "женский")); 
  console.log(getUsersNamesInAgeRange([], "женский")); 
  console.log(getUsersNamesInAgeRange(people, "инопланетянин")); 
  
  // Оставила для себя этот код, так как из него собирала последнее задание. 
  
  
  // function getUsersNamesInAgeRange(users, gend) {
  //     if (users.length === 0) {
  //       return 00;
  //     }
  //     if (gend === "мужской" || gend === "женский") {
  //       let genderFilter = users.filter(element => element.gender === gend); 
  //       // return genderFilter;
    
  //       let genderAge = genderFilter.map(element => element.age);
  //       // return genderAge;
    
  //       let genderAgeSum = genderAge.reduce((sum,element) => (sum + element));
  //       let rezalt = genderAgeSum / genderAge.length;
  //       return rezalt;
  //     } 
  //     return 0;  
  // }