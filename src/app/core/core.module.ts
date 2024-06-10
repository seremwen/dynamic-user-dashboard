import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnvironmentInterface, _environment } from '../data';
import { HTTPListener, HTTPStatus } from '../data/services';



@NgModule({
  declarations: [],
  providers:[
    NzNotificationService,
    HTTPListener,
    HTTPStatus,
    { provide: HTTP_INTERCEPTORS, useClass: HTTPListener, multi: true },
 
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(config: EnvironmentInterface): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: _environment,
          useValue: config
        }
      ]
    };
  }
}


function throwIfAlreadyLoaded(parentModule: unknown, moduleName: string) {
  if (!parentModule) return;
  throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
}
