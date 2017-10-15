import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ClockComponent } from './clock/clock.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WeatherComponent } from './weather/weather.component';
import { HomepageComponent } from './homepage/homepage.component';



const APP_ROUTES: Routes = [
	{path:'', redirectTo: 'home', pathMatch: 'full'},
	{path:'weather', component: WeatherComponent},
	{path:'clock', component: ClockComponent},
	{path:'gallery', component: GalleryComponent},
	{path:'home', component: HomepageComponent},
	{	path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
