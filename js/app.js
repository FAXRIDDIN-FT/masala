

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
      
    
      


  

 // masala 06
 export class Post {
        constructor(title, content) {
          this.title = title;
          this.content = content;
          this.likes = 0;
        }
      
        like() {
          this.likes += 1;
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
      
         
      
