import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchResultService } from 'src/app/core/services/search-result.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('searchField')
  searchField!: ElementRef;

  constructor(
    public headerService: HeaderService,
    public authService: AuthService,
    private searchResultService: SearchResultService,
  ) {}

  ngOnInit(): void {
    this.authService.checkLogin();
  }

  ngAfterViewInit() {
    this.searchResultService.searchWord(this.searchField);
  }
}
