{ // masala 01
    class ShopProduct {
        constructor(name, price, soni) {
            this.name = name;
            this.price = price;
            this.soni = soni;
        }

        getTotalPrice() {
            return this.price * this.soni;
        }
    }

    const product = new ShopProduct("Olma", 2000, 3);
    console.log("Total Price:", product.getTotalPrice())
}
{ // masala 02
    class Timer {
        constructor(seconds) {
            this.seconds = seconds
        }
        start() {
            for (let i = 1; i <= this.seconds; i++) {
                console.log(`${i} sekund o'tdi`)
            }
        }
    }
    const time = new Timer(1)
    time.start();
}
{ // masala 03
    class Flight {
        constructor(from, to, duration) {
          this.from = from;
          this.to = to;
          this.duration = duration;
        }
      
        getInfo() {
          return `${this.from} - ${this.to} (${this.duration} soat)`;
        }
      }
      
      const flight = new Flight("Toshkent", "Istanbul", 5);
      console.log(flight.getInfo()); 
      
}
{ // masala 04
    class Point {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
      
        getDistance() {
          return Math.sqrt(this.x ** 2 + this.y ** 2);
        }
      }
      
      const point = new Point(3, 4);
      console.log( point.getDistance());
      
}
{ // masala 05
    class Product {
        constructor(name, price) {
          this.name = name;
          this.price = price;
        }
      }
      
      class Cart extends Product {
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
      
      const cart = new Cart();
      cart.addProduct(new Product("Non", 5000));
      cart.addProduct(new Product("Sut", 8000));
      console.log("Cart Total:", cart.getTotal()); 
      
}
{ // masala 06
    class Post {
        constructor(title, content) {
          this.title = title;
          this.content = content;
          this.likes = 0;
        }
      
        like() {
          this.likes += 1;
        }
      }
      
      const post = new Post("Salom dunyo", "Bu mening birinchi postim");
      post.like();
      post.like();
      console.log(`Likes: ${post.likes}`); 
      
}
{ // masala 07
    class BankCard {
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
      
      const card = new BankCard("Ali", 100000, 50000);
      card.withdraw(60000); 
      card.withdraw(30000); 
      
}
{ // masala 08
    class Grade {
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
      
      const student = new Grade("asad", [80, 70, 90]);
      console.log("Average:", student.getAverage());     
      
}