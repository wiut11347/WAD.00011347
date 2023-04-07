import { Category } from "./category.model";

export class Bike {
  public name: string;
  public description: string;
  public imagePath: string;
  public price: number;
  public category: Category[];

  constructor(name: string, desc: string, imagePath:string, price: number, category: Category[]) {
    this.name = name;
    this.description = desc;
    this.imagePath=imagePath;
    this.price = price;
    this.category = category;
  }
}
