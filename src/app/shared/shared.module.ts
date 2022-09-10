import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TitleComponent, ImageComponent],
  exports: [TitleComponent, ImageComponent],
})
export class SharedModule {}
