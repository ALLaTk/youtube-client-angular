import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  constructor(
    public headerService: HeaderService,
    public filterService: FilterService,
  ) {}
}
