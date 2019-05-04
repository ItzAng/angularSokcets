import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig =
{
  //    url: 'http://localhost:8082/chat-websocket?access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZGF1em9uIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImluZiBhZGNjaW9uYWwiOiJob2xhIHF1ZSB0YWwhYWRhdXpvbiIsImV4cCI6MTU1NjkyOTU0MCwibm9tYnJlX3VzdWFyaW8iOiIxIGFkYXV6b24iLCJhdXRob3JpdGllcyI6WyJST0xFX0NSRUFDSU9OX0FSVElDVUxPUyIsIlJPTEVfUkVDRVBDSU9OX0FEUSIsIlJPTEVfU09MSUNJVFVERVNfR0VOIiwiUk9MRV9VU0VSIiwiUk9MRV9BTE1BQ0VOX0NBUFRVUkFfU0FMSURBIiwiUk9MRV9TT0xJQ0lUVURFU19HRSIsIlJPTEVfQURNSU4iLCJST0xFX01PRF9BUkVBIiwiUk9MRV9BTE1BQ0VOIl0sImp0aSI6ImExNzAyOTA3LWMwNjEtNGMzOC1iMmVlLTRmZDk4NjdjYjJlYyIsImNsaWVudF9pZCI6InNvbGljaXR1ZGVzIn0.EuCPBLyIJxhDDll-2PaS1dwr75rXHG7Gutaq-WTCQmLRr4c9dWHVTWsJNrm8dG9CrGV48l8eFLlcBn7AmQBpvrCrq1fD3viJkEnQGR1Z0NUwJz35yoFL2G5PtMu0cqrLmwRyYtRSjPXm5FdXRvH0KXUfyhRCRCJok326ko7-74TUVxZpD78RzE6YsAouxZ-Dpo5hNDXNKG9W5nvLiuQ93DtdPgVz6xfCRir1h033UE7dusiq1z4GP3HW6CFWoOLXq_11-iqk8Cx_7JAX_d6u-1nikrqY5tRpPsEPiqKpnyc36BLu-kNkokxs7F3ApXfbIr-gt7YvsEK89tEF9NEstQ', 
  url: 'http://localhost:8082/',
  options: {
    query: {
      access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZGF1em9uIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImluZiBhZGNjaW9uYWwiOiJob2xhIHF1ZSB0YWwhYWRhdXpvbiIsImV4cCI6MTU1NjkyOTU0MCwibm9tYnJlX3VzdWFyaW8iOiIxIGFkYXV6b24iLCJhdXRob3JpdGllcyI6WyJST0xFX0NSRUFDSU9OX0FSVElDVUxPUyIsIlJPTEVfUkVDRVBDSU9OX0FEUSIsIlJPTEVfU09MSUNJVFVERVNfR0VOIiwiUk9MRV9VU0VSIiwiUk9MRV9BTE1BQ0VOX0NBUFRVUkFfU0FMSURBIiwiUk9MRV9TT0xJQ0lUVURFU19HRSIsIlJPTEVfQURNSU4iLCJST0xFX01PRF9BUkVBIiwiUk9MRV9BTE1BQ0VOIl0sImp0aSI6ImExNzAyOTA3LWMwNjEtNGMzOC1iMmVlLTRmZDk4NjdjYjJlYyIsImNsaWVudF9pZCI6InNvbGljaXR1ZGVzIn0.EuCPBLyIJxhDDll-2PaS1dwr75rXHG7Gutaq-WTCQmLRr4c9dWHVTWsJNrm8dG9CrGV48l8eFLlcBn7AmQBpvrCrq1fD3viJkEnQGR1Z0NUwJz35yoFL2G5PtMu0cqrLmwRyYtRSjPXm5FdXRvH0KXUfyhRCRCJok326ko7-74TUVxZpD78RzE6YsAouxZ-Dpo5hNDXNKG9W5nvLiuQ93DtdPgVz6xfCRir1h033UE7dusiq1z4GP3HW6CFWoOLXq_11-iqk8Cx_7JAX_d6u-1nikrqY5tRpPsEPiqKpnyc36BLu-kNkokxs7F3ApXfbIr-gt7YvsEK89tEF9NEstQ'
    }
  }
};
//const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
