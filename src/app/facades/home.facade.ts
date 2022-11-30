import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IKpi } from '../core/models/products.model';
import * as homeSelectors from '../domain/store/home/home.selectors';
import { RootState } from '../domain/store';
import { getKpisAction } from '../domain/store/home/home.actions';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  isLoadingKpis$: Observable<boolean | null>;
  kpis$: Observable<IKpi[] | null>;
  constructor(
    private readonly _store: Store<RootState>,
    private _storee: Store
  ) {
    this.isLoadingKpis$ = this._store.select(homeSelectors.selectIsLoadingKpis);
    this.kpis$ = this._store.select(homeSelectors.selectKpis);
  }

  getKpis() {
    this._store.dispatch(getKpisAction());
  }
}
