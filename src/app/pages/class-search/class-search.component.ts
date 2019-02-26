import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-class-search',
  templateUrl: './class-search.component.html',
  styleUrls: ['./class-search.component.styl'],
})
export class ClassSearchComponent implements OnInit {

  message: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(event: any, stdNo: string, op: OverlayPanel): void {
    stdNo = stdNo.trim();

    if (!stdNo) {
      this.message = '沒輸入東西啊～';
      op.toggle(event);
      return;
    }

    this.router.navigate(['class', stdNo]);
  }

}
