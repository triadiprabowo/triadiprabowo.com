import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { EndpointHelper } from '../../helper/endpoint.helper';

@Component({
	templateUrl: './instagram-photos.component.html',
	selector: 'instagram-photos'
})
export class InstagramPhotosComponent {
	constructor(private http:HttpClient, private endpoint:EndpointHelper) { }

	public galleries:any[] = [];

	ngOnInit() {
		this.getInstagramPhotos();
	}

	public getInstagramPhotos() {
		this.http.get(`${this.endpoint.instagram}/triadiprabowo/media?count=20`)
			.subscribe(
				(data:any) => {
					this.galleries = data.posts;
					console.log(data);
				},
				(error:HttpErrorResponse) => {
					console.log(error)
				}
			);
	}
}