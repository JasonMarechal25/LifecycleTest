import { Component, OnInit, Input } from '@angular/core';
import { Data }  from '../data/data.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  @Input() dummyData: Data;

  ngOnInit() {
    console.log('DataBindingComponent', 'ngOnInit');
  }

  ngOnChanges() {
console.log('DataBindingComponent', 'ngOnChanges');
  }

  ngDoCheck() {
console.log('DataBindingComponent', 'ngDoCheck');
  }

  ngAfterContentInit() {
console.log('DataBindingComponent', 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
console.log('DataBindingComponent', 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
console.log('DataBindingComponent', 'nngAfterViewInitgOnInit');
  }

  ngAfterViewChecked() {
console.log('DataBindingComponent', 'ngAfterViewChecked');
  }

  ngOnDestroy() {
console.log('DataBindingComponent', 'ngOnDestroy');
  }
}