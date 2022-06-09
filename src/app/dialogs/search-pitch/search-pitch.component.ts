import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-search-pitch',
	templateUrl: './search-pitch.component.html',
	styleUrls: ['./search-pitch.component.scss']
})
export class SearchPitchComponent implements OnInit {
	isLinear = false;
	searchingFor!: { code: number; name: string; }[];
	genderType!: { code: number; name: string; }[];
	playingType!: { code: number; name: string; description: string; }[];
	time!: { code: number; name: string; }[];
	country!: { code: string; name: string; }[];
	constructor(private _formBuilder: FormBuilder) { }
	myFormGroup: FormGroup = this._formBuilder.group({
		searchingFor: ['', Validators.required],
		age: ['', Validators.required],
		genderType: ['', Validators.required],
		playingType: ['', Validators.required],
		time: ['', Validators.required],
		disability: ['', Validators.required],
		locationCode: ['', Validators.required],
	});
	ngOnInit(): void {
		this.searchingFor = [
			{ code: 1, name: "Myself" },
			{ code: 2, name: "My child" },
		]
		this.genderType = [
			{ code: 1, name: "Female football" },
			{ code: 2, name: "Male football" },
		]
		this.playingType = [
			{ code: 1, name: "Casual", description: "" },
			{ code: 2, name: "Club", description: "" },
		]
		this.time = [
			{ code: 1, name: "All days" },
			{ code: 2, name: "Weekdays" },
			{ code: 3, name: "Weekends" },
		]
		this.country = [
			{ code: '01', name: "Астана" },
			{ code: '02', name: "Алматы" },
			{ code: '03', name: "Кокшетау" },
			{ code: '10', name: "Костанай" },
			{ code: '13', name: "Туркестан" },
			{ code: '17', name: "Шымкент" },
		]
	}

}
