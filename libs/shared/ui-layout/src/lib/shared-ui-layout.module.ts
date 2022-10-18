import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {SharedUiToolbarModule} from '@bandmember/shared/ui-toolbar';
import { SharedUiMainModule } from '@bandmember/shared/ui-main';

@NgModule({
  imports: [
    CommonModule,
    SharedUiToolbarModule,
    SharedUiMainModule,
  ],
  declarations: [LayoutComponent],
})
export class SharedUiLayoutModule {}
