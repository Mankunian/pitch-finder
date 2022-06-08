import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchPitchComponent } from './dialogs/search-pitch/search-pitch.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'pitch-finder';

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
		this.dialog.open(SearchPitchComponent, {
			width: '40%'
		})
	}
}
