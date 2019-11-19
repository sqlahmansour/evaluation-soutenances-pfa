import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EvaluationSoutenancesSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [EvaluationSoutenancesSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class EvaluationSoutenancesHomeModule {}
