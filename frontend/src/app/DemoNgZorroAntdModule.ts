// src/app/demo-ng-zorro-antd.module.ts

import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
// Add other Ng Zorro components as needed

@NgModule({
  exports: [
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    // Add more components here as needed
  ],
})
export class DemoNgZorroAntdModule {}
