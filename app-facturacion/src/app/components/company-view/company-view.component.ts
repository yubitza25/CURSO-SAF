import { Component, Input } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-view',
  standalone: true,
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent {
  @Input() company: Company = { name: 'Empresa falsa', fiscalNumber: 10000 };
}
