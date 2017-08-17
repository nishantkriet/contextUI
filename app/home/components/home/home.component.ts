import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	moduleId: module.id,
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() { 
	}

	submit(){
	//alert("called submit button");
	this.router.navigate(["/mail"]);
	}

}
