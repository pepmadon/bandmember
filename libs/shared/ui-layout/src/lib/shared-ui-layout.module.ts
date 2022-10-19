import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {SharedUiToolbarModule} from '@bandmember/shared/ui-toolbar';
import { SharedUiMainModule } from '@bandmember/shared/ui-main';
import { SharedUiFooterModule } from '@bandmember/shared/ui-footer';

@NgModule({
  imports: [
    CommonModule,
    SharedUiToolbarModule,
    SharedUiMainModule,
    SharedUiFooterModule
  ],
  declarations: [LayoutComponent],
})
export class SharedUiLayoutModule {}
