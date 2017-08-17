import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	moduleId: module.id,
	selector: 'app-home',
	templateUrl: './mail.component.html',
	styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() { }

	gmailsubmit(){
	
		this.router.navigate(["/gmail"]);
	}

}
