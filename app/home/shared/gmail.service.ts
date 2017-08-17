import { Gmail } from './gmail.model';
import { Injectable, NgZone } from "@angular/core";
import { Http, Headers, Response, ResponseOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/map";

import { BackendService } from "../../shared";

@Injectable()
export class GmailService{
    items: BehaviorSubject<Array<Gmail>> = new BehaviorSubject([]);
    private allItems: Array<Gmail> = [];
    
      constructor(private http: Http, private zone: NgZone) { }
      load(){
          this.allItems.push(new Gmail("1","Nishant","First Subject"));
          this.allItems.push(new Gmail("2","Ramesh","Ramesh Subject"));

          this.allItems.push(new Gmail("3","Muru","Muru Subject"));
          this.allItems.push(new Gmail("4","Sundar","Sundar Subject"));
          this.allItems.push(new Gmail("5","Ramesh P","Ramesh Subject"));
          return this.allItems;
          
      }
}