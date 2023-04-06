import { Category } from "./category.model";

export class Bike {
  public name: string;
  public description: string;
  public price: number;
  public category: Category[];

  constructor(name: string, desc: string, price: number, category: Category[]) {
    this.name = name;
    this.description = desc;
    this.price = price;
    this.category = category;
  }
}
