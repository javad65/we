import { Injectable } from '@angular/core';

import { SnotifyService, SnotifyToastConfig } from 'ng-snotify';
import { AppModule } from '../app.module';


@Injectable()
export class NotifyManager {
    private static _notifyManager: NotifyManager;
    private notifyService: SnotifyService;
    private notifyConfig = {
        position: 'rightTop',
        timeout: 2000,
    };
    constructor() {
        this.notifyService = AppModule.injector.get(SnotifyService);
    }

    static createInstance(): NotifyManager {
        if (this._notifyManager == null) {
            this._notifyManager = new NotifyManager();

        }
        return this._notifyManager;
    }


    showSuccess(message?: string) {

        this.notifyService.success(message || 'عملیات با موفقیت انجام گردید', '', this.notifyConfig);
        //   this.notifyService.success('Example body content', 'Example Title');
        //   this.notifyService.error('Example body content', {
        //         timeout: 2000,
        //         showProgressBar: false,
        //         closeOnClick: false,
        //         pauseOnHover: true,
        //         position: 'rightTop'
        //     });
        //     this.notifyService.success('Example body content', 'Example title', {
        //         timeout: 2000,
        //         showProgressBar: false,
        //         closeOnClick: false,
        //         pauseOnHover: true,
        //         backdrop: 1,
        //         position: 'rightTop'
        //     });


    }

    showError(message?: string) {
        this.notifyService.error(message || 'خطایی در اجرای عملیات رخ داده', '', this.notifyConfig);

    }

}
