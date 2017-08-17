import { GmailComponent } from './components/gmail/gmail.component';
import { Routes } from '@angular/router';
// app
import { HomeComponent } from './components/home/home.component';
import { MailComponent } from './components/mail/mail.component';

export const HomeRoutes: Routes = [
		{
				path: 'home',
				component: HomeComponent
		},
		{
				path: 'mail',
				component: MailComponent
		},
		{
			path: 'gmail',
			component: GmailComponent
		}

];
