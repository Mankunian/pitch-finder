import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
	exports: [
		MatDialogModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatStepperModule,
		MatInputModule,
		MatCheckboxModule,
		MatRadioModule,
		MatSelectModule
	],
	providers: [{
		provide: MAT_RADIO_DEFAULT_OPTIONS,
		useValue: { color: 'primary' }
	}]
})


export class MaterialModule { }