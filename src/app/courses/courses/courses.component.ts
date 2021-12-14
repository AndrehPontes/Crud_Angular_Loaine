import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Front-end', time: '50 hs', nivel: 'Pleno'}
  ];

  displayedColumns = ['name', 'category', 'time', 'nivel'];

  constructor() { }

  ngOnInit(): void {
  }

}
