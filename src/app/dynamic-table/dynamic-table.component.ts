import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataTableDirective}  from 'angular-datatables';
import { Subject} from 'rxjs';
import { data } from 'jquery';

@Component({
  selector: 'app-dynamic-table',
  imports: [],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css'
})
export class DynamicTableComponent implements OnInit {
   users: any[] = [];
   dtOptions: any = {};

   constructor(private http: HttpClient) {}
   ngOnInit(): void {
     this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
     };

     this.http.get<any[]>('URL')
     .subscribe(data => {
      this.users = data;
     })
   }
} 
