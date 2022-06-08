import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPitchComponent } from './dialogs/search-pitch/search-pitch.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		BannerComponent,
		MainComponent,
		FooterComponent,
		SearchPitchComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MaterialModule,
		BrowserAnimationsModule,
		ReactiveFormsModule
	],
	providers: [
		{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
