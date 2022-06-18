import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebox',
  templateUrl: './slidebox.component.html',
  styleUrls: ['./slidebox.component.scss']
})
export class SlideboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject = [{
    image: '../../../assets/pasta.jpeg',
    thumbImage: '../../../assets/pasta.jpeg',
    title: 'Delicious pasta'
}, {
    image: '../../../assets/pizza.jpg',
    thumbImage: '../../../assets/pizza.jpg'
}, {
    image: '../../../assets/pasta.jpeg',
    thumbImage: '../../../assets/pasta.jpeg',
    title: 'Example with title.'
}];

}
