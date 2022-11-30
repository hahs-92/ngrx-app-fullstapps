import { Component, Input, OnInit } from '@angular/core';

import { IKpi } from '../../../../../core/models/products.model';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
})
export class KpiComponent implements OnInit {
  @Input() kpi!: IKpi | null;

  constructor() {}

  ngOnInit(): void {}
}
