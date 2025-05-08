function formatString(input: string, toUpper?: boolean): string {
  if (typeof toUpper === "undefined") {
    return input.toUpperCase();
  } else if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const concate = [];
  for (let array of arrays) {
    for (let element of array) {
      concate.push(element);
    }
  }
  return concate;
}

class Vehicle {
  constructor(private make: string, private year: number) {
    make = this.make;
    year = this.year;
  }
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
    model = this.model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value.length;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  let highestPriceProduct: Product = products[0];
  for (let product of products) {
    if (product.price > highestPriceProduct.price) {
      highestPriceProduct = product;
    }
  }
  return highestPriceProduct
}



enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}


async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}



