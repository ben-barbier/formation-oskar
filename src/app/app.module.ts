import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornCardComponent} from './unicorn-card/unicorn-card.component';
import {HttpClientModule} from '@angular/common/http';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        UnicornCardComponent,
        UnicornListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatButtonModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
