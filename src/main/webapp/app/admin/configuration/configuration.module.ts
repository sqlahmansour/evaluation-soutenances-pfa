import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EvaluationSoutenancesSharedModule } from 'app/shared/shared.module';

import { JhiConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [EvaluationSoutenancesSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [JhiConfigurationComponent]
})
export class ConfigurationModule {}
