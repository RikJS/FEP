import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MenuModule} from "./menu/menu.module";
import {VerzoekdetailsModule} from "./verzoekdetails/verzoekdetails.module";
import {VerzoeklijstModule} from "./verzoeklijst/verzoeklijst.module";
import {EventsDemoModule} from "./eventsDemo/eventsDemo.module";
import {BindingModule} from "./binding/binding.module";
import {MainComponent} from "./routeringDemo/main/main.component";
import {DetailsComponent} from "./routeringDemo/details/details.component";
import {ContactComponent} from "./routeringDemo/contact/contact.component";
import {NotfoundComponent} from "./routeringDemo/notfound/notfound.component";

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'contact', component: ContactComponent,
    data: { email: 'helloworld@demo.nl' } },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    ContactComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MenuModule,
    VerzoekdetailsModule,
    VerzoeklijstModule,
    EventsDemoModule,
    BindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
