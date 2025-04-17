

// masala 01
export class ShopProduct {
  constructor(name, price, soni) {
    this.name = name;
    this.price = price;
    this.soni = soni;
  }

  getTotalPrice() {
    return this.price * this.soni;
  }
}

// masala 02
export class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    for (let i = 1; i <= this.seconds; i++) {
      console.log(`${i} sekund o'tdi`);
    }
  }
}

 // masala 03
  export class Flight {
        constructor(from, to, duration) {
          this.from = from;
          this.to = to;
          this.duration = duration;
        }
      
        getInfo() {
          return `${this.from} - ${this.to} (${this.duration} soat)`;
        }
      }
      
    

 // masala 04
  export class Point {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
      
        getDistance() {
          return Math.sqrt(this.x ** 2 + this.y ** 2);
        }
      }
      
    

 // masala 05
  export class Product {
        constructor(name, price) {
          this.name = name;
          this.price = price;
        }
      }
      
      export class Cart extends Product {
        constructor() {
          super(); 
          this.products = [];
        }
      
        addProduct(product) {
          this.products.push(product);
        }
      
        getTotal() {
          return this.products.reduce((sum, p) => sum + p.price, 0);
        }
      }
      
 
      

 // masala 06
  export  class Post {
        constructor(title, content) {
          this.title = title;
          this.content = content;
          this.likes = 0;
        }
      
        like() {
          this.likes += 1;
        }
      }
    

 // masala 07
 export class BankCard {
        constructor(owner, balance, limit) {
          this.owner = owner;
          this.balance = balance;
          this.limit = limit;
        }
      
        withdraw(amount) {
          if (amount > this.limit || amount > this.balance) {
            console.log("Rad etildi: Limit yoki balans yetarli emas");
            return;
          }
          this.balance -= amount;
          console.log(`Yangi balans: ${this.balance}`);
        }
      }
      
    
      

 // masala 08
 export class Grade {
        constructor(studentName, scores) {
          this.studentName = studentName;
          this.scores = scores;
        }
      
        getAverage() {
          const sum = this.scores.reduce((a, b) => a + b, 0);
          return sum / this.scores.length;
        }
      
        isPassed() {
          return this.getAverage() >= 60;
        }
      }
      
     
