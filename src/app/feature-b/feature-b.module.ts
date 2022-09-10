import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageBComponent } from './page-b/page-b.component';
import { FeatureBRoutingModule } from './feature-b-routing.module';

@NgModule({
  imports: [CommonModule, FeatureBRoutingModule, SharedModule],
  declarations: [PageBComponent],
})
export class FeatureBModule {}
