import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  coursesInSemester: number = 4;
  message: string = 'Courses Information';
  isPythonActive: boolean = true;
  totalCourses: Number = 4;
  courseList: Array<string> = ['Java 1', 'Java 2', 'Phyton', 'Angular 1'];
  constructor() {
    this.showMessage();
    this.printCourses();
    this.checkPython();
    this.checkCourses();
  }

  ngOnInit(): void {}

  getCourseInSemester(): number {
    return this.coursesInSemester;
  }

  showMessage(): string {
    return this.message;
  }

  printCourses(): void {
    for (let course in this.courseList) {
      console.log(course);
    }
  }

  checkPython(): boolean {
    return this.isPythonActive ? true : false;
  }
  checkCourses(): boolean {
    return this.totalCourses > 3 ? true : false;
  }
}
