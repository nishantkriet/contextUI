

import { Component,ElementRef, OnInit, ViewChild} from "@angular/core";
//import * as utils from "utils/utils";
import {Gmail} from "../../shared/gmail.model"
//declare var UIColor: any;


//import { Gmail , GmailService } from "../../../shared";
//import { alert } from "../../shared";

@Component({
	moduleId: module.id,
	selector: 'list',
	templateUrl: './gmail.component.html',
	styleUrls: ['./gmail.component.scss']
})
export class GmailComponent implements OnInit {
	
	mailList: Array<Gmail> = [];
	
	ngOnInit() {
	//alert("hii");
		this.mailList.push(new Gmail("1","Nishant","Nishant Subject"));
		this.mailList.push(new Gmail("2","Ramesh","Ramesh Subject"));

          this.mailList.push(new Gmail("3","Muru","Muru Subject"));
          this.mailList.push(new Gmail("4","Sundar","Sundar Subject"));
          this.mailList.push(new Gmail("5","Ramesh P","Ramesh Subject"));
	}
	

	
	gmailsubmit(){
		
	}

}
