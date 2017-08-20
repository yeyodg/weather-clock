import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ClockComponent } from './clock/clock.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WeatherComponent } from './weather/weather.component';
import { HomepageComponent } from './homepage/homepage.component';



const APP_ROUTES: Routes = [
	// {path:'', component: QuotesComponent},
	// {path:'new-quote', component: NewQuoteComponent},
	// {path:'signin', component: SigninComponent},
	// {path:'signup', component: SignupComponent}
	// {	path: '', redirectTo: '/pacientes', pathMatch: 'full' },
	// { path: 'pacientes', component: PacientesComponent, children: RUTAS_PACIENTES },
	// {	path: '**', redirectTo: '/pacientes' }
	{path:'', redirectTo: 'home', pathMatch: 'full'},
	{path:'weather', component: WeatherComponent},
	{path:'clock', component: ClockComponent},
	{path:'gallery', component: GalleryComponent},
	{path:'home', component: HomepageComponent},


];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);