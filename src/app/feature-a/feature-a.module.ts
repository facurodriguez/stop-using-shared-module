import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageAComponent } from './page-a/page-a.component';
import { FeatureARoutingModule } from './feature-a-routing.module';

@NgModule({
  imports: [CommonModule, FeatureARoutingModule, SharedModule],
  declarations: [PageAComponent],
})
export class FeatureAModule {}
