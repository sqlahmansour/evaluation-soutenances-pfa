import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EvaluationSoutenancesSharedModule } from 'app/shared/shared.module';

import { JhiMetricsMonitoringComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [EvaluationSoutenancesSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [JhiMetricsMonitoringComponent]
})
export class MetricsModule {}
