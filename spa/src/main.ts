import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  bootstrapApplication(AppComponent, {
    
    providers: [
      provideAuth0({
        domain: 'dev-w7wivfmb1blwty6n.us.auth0.com',
        clientId: 'sKsxZcYNSvE0bT8GijBIcqoiVeAmRjTp',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
    ]
  });
