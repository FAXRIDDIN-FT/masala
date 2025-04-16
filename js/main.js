import { ShopProduct, Timer , Flight, Point , Grade ,Post} from './app.js';

const product = new ShopProduct("Olma", 2000, 3);
console.log("Total Price:", product.getTotalPrice());

const timer = new Timer(3);
timer.start();

const flight = new Flight("Toshkent", "Istanbul", 5);
console.log(flight.getInfo()); 

const point = new Point(3, 4);
console.log( point.getDistance());

 const post = new Post("Salom dunyo", "Bu mening birinchi postim");
      post.like();
      post.like();
      console.log(`Likes: ${post.likes}`);

      const student = new Grade("asad", [80, 70, 90]);
      console.log("Average:", student.getAverage()); 