import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';

import { MenuComponent } from './menu.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatProgressSpinnerModule
     ],
    declarations: [
        MenuComponent ,
    ],
    exports: [ MenuComponent ],
})
export class MultiUseModule {}
