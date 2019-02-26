import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassTableService } from 'src/app/services/class-table.service';
import { Klass } from 'src/app/models/klass';
import { Time } from 'src/app/models/time';

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.styl'],
})
export class ClassTableComponent implements OnInit {

  stdNo: string;
  data: any[];

  cols = [
    { field: 'mon', header: '星期一' },
    { field: 'tue', header: '星期二' },
    { field: 'wed', header: '星期三' },
    { field: 'thu', header: '星期四' },
    { field: 'fri', header: '星期五' },
    { field: 'sat', header: '星期六' },
    { field: 'sun', header: '星期日' },
  ];

  frozenCols = [
    { field: 'time', header: '時間' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private classTableService: ClassTableService,
  ) { }

  ngOnInit() {
    this.stdNo = this.route.snapshot.paramMap.get('stdNo');
    this.classTableService.get(this.stdNo).subscribe(res => {
      if (!res) {
        confirm(`找不到 ${this.stdNo} 的課表`);
        this.router.navigate(['class-search']);
        return;
      }

      const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
      const data = Array(14).fill({}).map(_ => Object.assign({}, {
        time: null,
        mon: null,
        tue: null,
        wed: null,
        thu: null,
        fri: null,
        sat: null,
        sun: null,
      }));

      res.class.forEach((klassOfDay: Klass[], index) => {
        klassOfDay.forEach((klass: Klass, i) => {
          data[i][weekDays[index]] = klass;
        });
      });

      res.time.forEach((t: Time, i) => {
        data[i].time = t;
      });

      this.data = data;
      console.log(data)
    });
  }

}
