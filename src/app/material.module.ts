import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatToolbarModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatToolbarModule,
        MatProgressSpinnerModule
    ],
})

export class MaterialModule {}