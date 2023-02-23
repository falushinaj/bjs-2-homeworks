// ЗАДАЧА 1


function parseCount (x)
{
    let parseResult = Number.parseFloat(x);
    if (Number.isNaN(parseResult)) throw new Error("Невалидной значение");
    return parseResult;
}

// console.log(parseCount("123")); 
// // 123
// console.log(parseCount("012"));
// // 12
// console.log(parseCount("ыфва")); 
// // "Невалидное значение"


function validateCount(x) {
    try {
        return parseCount(x);
    } catch (e) {
        return e;
    }
}

// console.log(validateCount("56.65"));
// // 56.65
// console.log(validateCount("ыфва"));
// // перехват ошибки



// ЗАДАЧА 2


class Triangle
{
    constructor(a, b, c)
    {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a > b + c || b > a + c || c > a + b)
        {
            throw new Error("Треугольник с такими сторонами не существует")
        }

    }
    getPerimeter ()
    {
        return (this.a + this.b + this.c);
    }

    getArea ()
    {
        const p = this.getPerimeter() / 2;
        return ((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3);
    }
}

// const triangle = new Triangle(1,3,3);
// console.log(triangle);

// const triangle = new Triangle(2,5,5);
// console.log(triangle);
// console.log(triangle.getPerimeter());
// // 12
// console.log(triangle.getArea());
// // 4.899

// const triangle = new Triangle(6,10,15);
// console.log(triangle);
// console.log(triangle.getPerimeter());
// // 31
// console.log(triangle.getArea());
// // 20.123



function getTriangle (a, b, c)
{
    try
    {
        return new Triangle(a, b, c);
    } catch (e)
    {
        return {
            getArea: function () {return console.log("Ошибка! Треугольник не существует")},
            getPerimeter: function () {return console.log("Ошибка! Треугольник не существует")}
        }
    }
}


// const triangle = new Triangle(1,3,100);
// // не существует
// const triangle = new Triangle(100,3,10);
// // не существует
// const triangle = new Triangle(1,300,10);
// // не существует

// const triangle = new Triangle(2,5,5);

// const triangle = getTriangle(1,3,100);
// console.log(triangle);
// console.log(triangle.getPerimeter());
// console.log(triangle.getArea());
