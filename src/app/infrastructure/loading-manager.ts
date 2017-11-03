import { Injectable } from '@angular/core';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppModule } from '../app.module';


@Injectable()
export class LoadingManager {
    static _loadingManager: LoadingManager;
    loading: Ng4LoadingSpinnerService;
    busyConfig = {
        busy: null,
        message: 'My message',
        backdrop: true
    };

    constructor() {
        this.loading = AppModule.injector.get(Ng4LoadingSpinnerService);
    }

    static createInstance(): LoadingManager {
        if (this._loadingManager == null) {
            this._loadingManager = new LoadingManager();

        }
        return this._loadingManager;
    }


    show() {
        this.loading.show();
    }

    hide() {
        this.loading.hide();
    }

}
