import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlerComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
export * from './server/server.component';
export * from './servers/servers.component';
export * from './warning-alert/warning-alert.component';

export const COMPONENTS = [
  ServerComponent,
  ServersComponent,
  SuccessAlerComponent,
  WarningAlertComponent,
];
