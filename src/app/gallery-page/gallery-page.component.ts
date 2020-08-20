import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import{FILTER} from 'src/app/constant'
@Component({
	selector: 'app-gallery-page',
	templateUrl: './gallery-page.component.html',
	styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
	title = 'Space Photos'
	@Input() filterBy?: string = FILTER.ALL;
	visibleImages: any[] = [];
	FILTER = FILTER;

	constructor(private imageService: ImageService) {
		this.visibleImages = this.imageService.getImages();
	}
}
