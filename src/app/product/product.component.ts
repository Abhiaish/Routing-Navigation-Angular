import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Products = [
    {
      id: "ABC8441189035",
      name: "Tshirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: "DEF6510463347",
      name: "Shoes",
      description: "Proin ac metus in diam porttitor viverra eu sit amet ligula."
    },
    {
      id: "GHI0831819467",
      name: "Handbags",
      description: "Duis sodales dui vitae urna varius, at ullamcorper purus tempor."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
