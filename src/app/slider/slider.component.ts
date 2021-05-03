import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SliderDatasService } from '../services/slider-datas.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  users;
  images;
  elements;

  private listName;
  private listImages;
  private listElements;

  optionTx = {
    width: 131,
    position: 0,
    count: 1,
  };

  optionIm = {
    width: 131,
    position: 0,
    count: 1,
  };

  optionCom = {
    width: 131,
    position: 0,
    count: 1,
  };

  @ViewChild('list', { read: ElementRef }) list: ElementRef;
  @ViewChild('listIm', { read: ElementRef }) listIm: ElementRef;
  @ViewChild('listEl', { read: ElementRef }) listEl: ElementRef;

  ngOnInit(): void {}

  constructor(
    _useList: SliderDatasService,
    _useImList: SliderDatasService,
    _useCmList: SliderDatasService
  ) {
    this.listName = _useList.getListNames();
    this.users = this.listName;

    this.listImages = _useImList.getListImages();
    this.images = this.listImages;

    this.listElements = _useCmList.getListCombi();
    this.elements = this.listElements;
  }

  imageSliderPrev(): void {
    this.clickPrev(this.optionIm, this.listIm);
  }

  imageSliderNext(): void {
    this.clickNext(this.optionIm, this.listIm);
  }

  textSliderPrev(): void {
    this.clickPrev(this.optionTx, this.list);
  }

  textSliderNext(): void {
    this.clickNext(this.optionTx, this.list);
  }

  combSliderPrev(): void {
    this.clickPrev(this.optionCom, this.listEl);
  }

  combSliderNext(): void {
    this.clickNext(this.optionCom, this.listEl);
  }

  clickPrev(option, list): void {
    option.position += option.width * option.count;
    option.position = Math.min(option.position, 0);
    list.nativeElement.style.marginLeft = option.position + 'px';
  }

  clickNext(option, list): void {
    option.position -= option.width * option.count;
    option.position = Math.max(
      option.position,
      -option.width * (this.users.length - option.count)
    );
    list.nativeElement.style.marginLeft = option.position + 'px';
  }

  // ______swipe______

  slider_1 = {
    cond1_1: false,
    cond2_1: false,
    mousedownFired_1: false,
    index_1: 0,
    xDown_1: 0,
  };

  slider_2 = {
    cond1_2: false,
    cond2_2: false,
    mousedownFired_2: false,
    index_2: 0,
    xDown_2: 0,
  };

  slider_3 = {
    cond1_3: false,
    cond2_3: false,
    mousedownFired_3: false,
    index_3: 0,
    xDown_3: 0,
  };

  dragover(num: number) {
    console.log('dragover');
    this.textSliderNext();
    // if (num === 0) {this.textSliderNext()};
    // if (num === 1) {this.imageSliderNext()};
    // if (num === 2) {this.combSliderNext()};
  }

  // $('.carousel').mousedown(function () {
  //   cond1 = true;
  //   xDown = event.clientX;
  //   mousedownFired = true;
  // });

  // $('.carousel').mousemove(function () {
  //   this.cond2 = true;
  // });

  // $('.carousel').mouseup(function () {            // for swipe
  //   event.stopPropagation();
  //   var xUp = event.clientX;
  //   if (this.cond1 && this.cond2){
  //     swipe(xUp);
  //   }
  //   cond1 = false;
  //   cond2 = false;
  // });

  // function swipe(xUp) {
  //   if (xDown > xUp) {
  //     rightClick();
  //   }
  //   else {
  //     leftClick();
  //   }
  // }
}
