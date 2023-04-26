import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { InputOverviewExample } from './input-overview-example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ValueStackComponent } from './value-stack.component';
import { RemoveWhitespacesOldDirective } from './directives/remove-whitespaces-old.directive';
import { RemoveWhitespacesDirective } from './directives/remove-whitespaces.directive';

@NgModule({
  declarations: [
    InputOverviewExample,
    ValueStackComponent,
    RemoveWhitespacesOldDirective,
    RemoveWhitespacesDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  bootstrap: [InputOverviewExample],
})
export class AppModule {}
