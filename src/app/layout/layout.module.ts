import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent, PathNotFoundComponent } from './components';


@NgModule({
  declarations: [AboutComponent, PathNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
