import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {SharedUiToolbarModule} from '@bandmember/shared/ui-toolbar';

@NgModule({
  imports: [
    CommonModule,
    SharedUiToolbarModule
  ],
  declarations: [LayoutComponent],
})
export class SharedUiLayoutModule {}
