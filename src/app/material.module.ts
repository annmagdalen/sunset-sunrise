import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule, MatInputModule, MatSelectModule, MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatToolbarModule
    ],
    exports: [
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatToolbarModule
    ],
})

export class MaterialModule {}