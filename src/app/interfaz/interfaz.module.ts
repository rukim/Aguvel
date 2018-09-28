import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisenoComponent } from './diseno/diseno.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisenoComponent],
  exports: [DisenoComponent]
})
export class InterfazModule { }
