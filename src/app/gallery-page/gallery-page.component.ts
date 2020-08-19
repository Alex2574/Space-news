import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
	selector: 'app-gallery-page',
	templateUrl: './gallery-page.component.html',
	styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnChanges {
	title = 'Space Photos'
	@Input() filterBy?: string = 'all'
	visibleImages: any[] = [];

	constructor(private imageService: ImageService) {
		this.visibleImages = this.imageService.getImages();
	}

	ngOnChanges() {
		this.visibleImages = this.imageService.getImages();
	}
}
