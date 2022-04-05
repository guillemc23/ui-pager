import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { PagerModule } from "@nativescript-community/ui-pager/angular";

import { StaticPagerComponent } from './static-pager/static-pager.component';
import { BasicPagerComponent } from './basic-pager/basic-pager.component';
import { IndicatorComponent } from './indicator/indicator.component';

export const COMPONENTS = [StaticPagerComponent, BasicPagerComponent, IndicatorComponent];
@NgModule({
    imports: [PagerModule],
    exports: [PagerModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class InstallModule {}

export function installPlugin() { }

export const demos = [
    { name: 'Static Pager', path: 'static-pager', component: StaticPagerComponent },
    { name: 'Basic Pager', path: 'basic-pager', component: BasicPagerComponent },
    { name: 'Indicator', path: 'indicator', component: IndicatorComponent }
];

