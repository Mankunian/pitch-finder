import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchPitchComponent } from '../dialogs/search-pitch/search-pitch.component';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

	constructor(
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
	}

	openSearchDialog() {
		this.dialog.open(SearchPitchComponent)
	}

}
