import { Component, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'angular2-lightbox';



@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Gallery</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <img class="img-responsive" src="{{path}}"/>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() path;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'we-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent{
	public _album: any[] = [];

  constructor(private modalService: NgbModal, private _lightbox: Lightbox) { 
  	for (let i = 107; i <= 109; i++) {
  	      const src = './images/icons/' + i + '.png';
  	      const caption = 'Image ' + i + ' caption here';
  	      const thumb = './images/icons/' + i + '-thumb.png';
  	      const album = {
  	         src: src,
  	         caption: caption,
  	         thumb: thumb
  	      };

  	      this._album.push(album);
        }
  }

  open2(index: number): void {
      // open lightbox
      this._lightbox.open(this._album, index);
    }
}


