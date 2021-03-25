import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SliderDatasService {
  private listName = [
    { name: 'Salat0' },
    { name: 'Salat1' },
    { name: 'Salat2' },
    { name: 'Salat3' },
    { name: 'Salat4' },
    { name: 'Salat5' },
    { name: 'Salat6' },
    { name: 'Salat7' },
    { name: 'Salat8' },
    { name: 'Salat9' },
    { name: 'Salat10' },
    { name: 'Salat11' },
    { name: 'Salat12' },
    { name: 'Salat13' },
  ];

  private listImages = [
    { scr: 'https://picsum.photos/200?random=1' },
    { scr: 'https://picsum.photos/200?random=2' },
    { scr: 'https://picsum.photos/200?random=3' },
    { scr: 'https://picsum.photos/200?random=4' },
    { scr: 'https://picsum.photos/200?random=5' },
    { scr: 'https://picsum.photos/200?random=6' },
    { scr: 'https://picsum.photos/200?random=7' },
    { scr: 'https://picsum.photos/200?random=8' },
    { scr: 'https://picsum.photos/200?random=9' },
    { scr: 'https://picsum.photos/200?random=10' },
    { scr: 'https://picsum.photos/200?random=11' },
    { scr: 'https://picsum.photos/200?random=12' },
    { scr: 'https://picsum.photos/200?random=13' },
    { scr: 'https://picsum.photos/200?random=14' },
  ];

  private listCombi = [
    { scr: 'https://picsum.photos/200?random=1', name: 'Salat0' },
    { scr: 'https://picsum.photos/200?random=2', name: 'Salat1' },
    { scr: 'https://picsum.photos/200?random=3', name: 'Salat2' },
    { scr: 'https://picsum.photos/200?random=4', name: 'Salat3' },
    { scr: 'https://picsum.photos/200?random=5', name: 'Salat4' },
    { scr: 'https://picsum.photos/200?random=6', name: 'Salat5' },
    { scr: 'https://picsum.photos/200?random=7', name: 'Salat6' },
    { scr: 'https://picsum.photos/200?random=8', name: 'Salat7' },
    { scr: 'https://picsum.photos/200?random=9', name: 'Salat8' },
    { scr: 'https://picsum.photos/200?random=10', name: 'Salat9' },
    { scr: 'https://picsum.photos/200?random=11', name: 'Salat10' },
    { scr: 'https://picsum.photos/200?random=12', name: 'Salat11' },
    { scr: 'https://picsum.photos/200?random=13', name: 'Salat12' },
    { scr: 'https://picsum.photos/200?random=14', name: 'Salat13' },
  ];

  public getListNames() {
    return this.listName;
  }

  public getListImages() {
    return this.listImages;
  }

  public getListCombi() {
    return this.listCombi;
  }

  constructor() {}
}
