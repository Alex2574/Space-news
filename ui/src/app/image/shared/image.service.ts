import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
	visibleImages = [];
	getImages() {
		return this.visibleImages = IMAGES.slice(0);
	}
	getImage(id: number) {
		return IMAGES.slice(0).find(image => image.id === id)
	};
}

const IMAGES = [
	{ "id": 1, "category": "galaxies", "caption": "Purple Sunset", "url": "assets/gallerry-photo/galaxies-photo/galaxy01.jpg" },
	{ "id": 2, "category": "galaxies", "caption": "On the way", "url": "assets/gallerry-photo/galaxies-photo/galaxy02.jpg" },
	{ "id": 3, "category": "galaxies", "caption": "View from a above", "url": "assets/gallerry-photo/galaxies-photo/galaxy03.jpg" },
	{ "id": 4, "category": "galaxies", "caption": "Pirate Style", "url": "assets/gallerry-photo/galaxies-photo/galaxy04.jpg" },
	{ "id": 5, "category": "galaxies", "caption": "Perfect Parking Spot", "url": "assets/gallerry-photo/galaxies-photo/galaxy05.jpg" },
	{ "id": 6, "category": "hubble", "caption": "Night Sky", "url": "assets/gallerry-photo/hubble-photo/hubble01.jpg" },
	{ "id": 7, "category": "hubble", "caption": "View from inside the tent", "url": "assets/gallerry-photo/hubble-photo/hubble02.jpg" },
	{ "id": 8, "category": "hubble", "caption": "Starting the fire", "url": "assets/gallerry-photo/hubble-photo/hubble03.jpg" },
	{ "id": 9, "category": "hubble", "caption": "In the woods", "url": "assets/gallerry-photo/hubble-photo/hubble04.jpg" },
	{ "id": 10, "category": "hubble", "caption": "Mountains", "url": "assets/gallerry-photo/hubble-photo/hubble05.jpg" },
	{ "id": 11, "category": "hubble", "caption": "hubble is sharing", "url": "assets/gallerry-photo/hubble-photo/hubble03.jpg" },
	{ "id": 12, "category": "hubble", "caption": "hubble with Style", "url": "assets/gallerry-photo/hubble-photo/hubble01.jpg" },
	{ "id": 13, "category": "milkyway", "caption": "My Kind of Wall", "url": "assets/gallerry-photo/milky-way-photo/milkyway01.jpg" },
	{ "id": 14, "category": "milkyway", "caption": "Open Book", "url": "assets/gallerry-photo/milky-way-photo/milkyway02.jpg" },
	{ "id": 15, "category": "milkyway", "caption": "My favorite pillow", "url": "assets/gallerry-photo/milky-way-photo/milkyway03.jpg" },
	{ "id": 16, "category": "milkyway", "caption": "Books all over", "url": "assets/gallerry-photo/milky-way-photo/milkyway04.jpg" },
	{ "id": 17, "category": "milkyway", "caption": "Books all over", "url": "assets/gallerry-photo/milky-way-photo/milkyway05.jpg" },
];