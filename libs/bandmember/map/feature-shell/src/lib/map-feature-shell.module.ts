import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent, FeatureMapModule } from '@bandmember/bandmember/map/feature-map';
import { Routes, RouterModule } from '@angular/router';


const mapRoutes: Routes = [
  {
    path: '',
    component: MapComponent,
  },

];


@NgModule({
  imports: [
    CommonModule,
    FeatureMapModule,
    RouterModule.forChild(mapRoutes)
  ],
  exports: [RouterModule],
})
export class MapFeatureShellModule {}
