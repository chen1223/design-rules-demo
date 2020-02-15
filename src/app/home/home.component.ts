import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryList = [
    {
      img: 'https://via.placeholder.com/80x80',
      name: 'Sample 1'
    },
    {
      img: 'https://via.placeholder.com/80x80',
      name: 'Sample 2'
    },
    {
      img: 'https://via.placeholder.com/80x80',
      name: 'Sample 3'
    }
  ];
  productList = [
    {
      img: 'https://via.placeholder.com/474x286',
      name: 'Product Title',
      price: '$399',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos'
    },
    {
      img: 'https://via.placeholder.com/474x286',
      name: 'Product Title',
      price: '$399',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos'
    },
    {
      img: 'https://via.placeholder.com/474x286',
      name: 'Product Title',
      price: '$399',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos'
    }
  ];
  // Determine if the proximity section fix is applied
  prettyProximity = false;
  // Determine if the visual hierarchy section fix is applied
  prettyVisual = false;
  // Determine if the line width section fix is applied
  prettyWidth = false;
  constructor() { }

  ngOnInit() {
  }

  applyFix(category, fix: boolean = false) {
    switch (category) {
      case 'proximity':
        this.prettyProximity = fix;
        break;
      case 'visual':
        this.prettyVisual = fix;
        break;
      case 'width':
        this.prettyWidth = fix;
        break;
    }
  }

}
