import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent} from './home-page/home-page.component';

import { AboutUsComponent } from './home-page/about-us.component';
import { LearnMoreComponent } from './home-page/learn-more.component';
import { AboutDataComponent } from './home-page/about-data.component';
import { SitemapComponent } from './home-page/sitemap.component';
import { PrivacyComponent } from './home-page/privacy.component';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'about-us', component: AboutUsComponent},
    // { path: 'codeofconduct', component: CodeOfConductComponent},
    { path: 'about-data', component: AboutDataComponent},
    { path: 'learn-more', component: LearnMoreComponent},
    { path: 'legal', component: SitemapComponent},
    { path: 'privacy', component: PrivacyComponent},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
