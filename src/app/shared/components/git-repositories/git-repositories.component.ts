import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EndpointHelper } from '../../helper/endpoint.helper';

@Component({
	selector: 'git-repos',
	templateUrl: './git-repositories.component.html'
})
export class GitRepositoriesComponent {
	constructor(private http:HttpClient, private url:EndpointHelper) { }

	public repos:any[] = [];

	ngAfterViewInit() {
		this.gitRepositories();
	}

	public gitRepositories(): void {
		this.http.get(`${this.url.github}/users/triadiprabowo/repos`)
			.subscribe(
				(data:any) => {
					this.repos = data;
					console.log(data)
				},
				(error:HttpErrorResponse) => {
					this.repos = [];
				}
			)
	}

	private setBadge(name:string) {
		switch(name) {
			case 'JavaScript': {
				return 'btn-warning';
			}

			case 'CSS': {
				return 'btn-primary';
			}

			case 'PHP': {
				return 'btn-danger';
			}
		}
	}
}