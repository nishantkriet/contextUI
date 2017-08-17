import { GmailComponent } from './components/gmail/gmail.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { HomeRoutes } from './home.routes';
import { HomeComponent } from './components/home/home.component';
import { MailComponent } from './components/mail/mail.component';


@NgModule({
	imports: [
		NativeScriptModule,
		NativeScriptFormsModule,
		NativeScriptRouterModule.forChild(<any>HomeRoutes)
	],
	declarations: [
	HomeComponent,
	MailComponent,
	GmailComponent,
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class HomeModule { }
