//Task 1
// function getMin(arr) {
//     return Math.min(...arr);  
// }

//Task 2
// function mapCreator(keys, values) {
//     let newMap = new Map();
//     for (let i in keys) {
//         if(typeof values[i] === 'string'){
//             newMap.set(keys[i], values[i]);
//         }
//     }
//     return newMap;
//  }

// const map2 = mapCreator([1, 2, 3, 4, 5, 6, 7],["Lviv", 23, "Kyiv", "Dnipro", "Kharkiv", "Chernivtsi", true]);
// console.log(map2);

//Task 3
// const Checker = require('./Checker.js');

// class Movie {
//    constructor(name, category, startShow){
//       this.name = name;
//       this.category = category;
//       this.startShow = startShow;
//    }        
//    watchMovie(){
//       return `I watch the movie ${this.name}!`;
//    }
// };
// const movie1 = new Movie("Titanic", "drama", 1997);
// const movie2 = new Movie("Troya", "historical", 2004);
// console.log(movie1.watchMovie());
// console.log(movie2.watchMovie());
	
// console.log(Checker.classHasObject(Movie, movie1));
//Task 4
//const Checker = require('./Checker.js');

// class Student {
//     constructor(fullName, direction) {
//       this._fullName = fullName;
//       this._direction = direction;
//     }
//     showFullName(){
//       return this._fullName;
//     }
//     nameIncludes(data) {
//          return this.showFullName.includes(data));
//           
//       }
//       static studentBuilder() {
//          return new this('Ihor Kohut', 'qc');
//        }
//       get direction() {
//          return this._direction;
//        }
     
//        set direction(newDirection) {
//          this._direction = newDirection;
//        }
// }
// const stud1 = new Student('Ivan Petrenko', 'web');
// const stud2 = new Student('Sergiy Koval', 'python');
// const stud3 = Student.studentBuilder();

//Task 5
// const product = function() {
//    return [].reduce.call(arguments, function(res, elem) {
//      return res * elem;
//    }, this.product);
// };

//  const contextObj = {product:10};

//  const getProduct = product.bind(contextObj, 2, 3);

// getProduct(4,5);

//Task 6
// class Distributor {
//    constructor() {
//        this.products = {};
//    }
   
//    addProduct(id, name) {
//       this.products[id] = name;
//    }
   
//    removeProduct(id) {
//        delete this.products[id];
//        return;
//    }
// }

// const localDistributor = new Distributor();

// class MyProduct{
//    constructor(name){
//        this.id = Symbol(name);
//        this.name = name;
//    }
   
//    distribute(distributor){
//        distributor.addProduct(this.id, this.name);
//    }
// }

// const product1 = new MyProduct('butter');
// product1.distribute(localDistributor); 
// console.log(localDistributor.products);
//{ [Symbol(butter)]: 'butter' }

// new MyProduct('bread').distribute(localDistributor);
// new MyProduct('bread').distribute(localDistributor); 
// console.log(localDistributor.products);
// {
//    [Symbol(butter)]: 'butter',
//    [Symbol(bread)]: 'bread',
//    [Symbol(bread)]: 'bread'
//  }

// localDistributor.removeProduct(product1.id);
// console.log(localDistributor.products); 
//{ [Symbol(bread)]: 'bread', [Symbol(bread)]: 'bread' }
  
