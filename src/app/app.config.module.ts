/*
** ----------------------------------------------
** import required dependencies
** @return class
** ----------------------------------------------
*/

// import app component
import { AppComponent } from './app.component';

// import landing component
import { LandingComponent } from './pages/landing/landing.component';

// shared components, directives, guards, interceptor, pipe, services, helper
import { CookieService } from './shared/services/cookie.service';
import { PlatformService } from './shared/services/platform.service';
import { EndpointHelper } from './shared/helper/endpoint.helper';

// shared header
import { HeaderComponent } from './shared/components/header/header.component';

// shared git repos component
import { GitRepositoriesComponent } from './shared/components/git-repositories/git-repositories.component';

// shared instagram photos component
import { InstagramPhotosComponent } from './shared/components/instagram-photos/instagram-photos.component';

/*
** -----------------------------------------------------------
** Export config of RouterList, ProviderList, DeclarationList
** @return Array()
** -----------------------------------------------------------
*/
export const RouterList = [
	// index component
	{ path: '', component: LandingComponent }
]

export const DeclarationList:any[] = [
	AppComponent,
	LandingComponent,

	// Shared components
	HeaderComponent,
	GitRepositoriesComponent,
	InstagramPhotosComponent
];

export const ProviderList:any[] = [
	CookieService,
	PlatformService,
	EndpointHelper
];

export const AppBootstrap:any[] = [AppComponent];