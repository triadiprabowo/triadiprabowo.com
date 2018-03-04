import { Injectable } from '@angular/core';

@Injectable()
export class EndpointHelper {
	constructor() { }

	public github:string = 'https://api.github.com';
	public bitbucket:string = 'https://api.bitbucket.org/2.0';
	public instagram:string = 'https://igpi.ga';
}