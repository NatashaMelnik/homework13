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
    useList: SliderDatasService,
    useImList: SliderDatasService,
    useCmList: SliderDatasService
  ) {
    this.listName = useList.getListNames();
    this.users = this.listName;

    this.listImages = useImList.getListImages();
    this.images = this.listImages;

    this.listElements = useCmList.getListCombi();
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

  dragover(num: number): void {
    if (num === 0) {
      this.textSliderNext();
    }
    if (num === 1) {
      this.imageSliderNext();
    }
    if (num === 2) {
      this.combSliderNext();
    }
    console.log('dragover');
  }

}
