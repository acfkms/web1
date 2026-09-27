import { Component } from '@angular/core';
interface Student {
  name: string;
  age: number;
  grade: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
    { name: 'Anna', age: 18, grade: 11 },
    { name: 'Ivan', age: 17, grade: 7 },
    { name: 'Oleg', age: 18, grade: 5 }
  ];
  newStudent: Student = {
    name: '',
    age: 0,
    grade: 0
  };
  addStudent(): void {
    if (!this.newStudent.name || this.newStudent.name.trim() === '') {
      return;
    }
    this.students.push({ ...this.newStudent });
    this.newStudent = { name: '', age: 0, grade: 0 };
  }
  deleteStudent(index: number): void {
    this.students.splice(index, 1);
  }
  getGradeClass(grade: number): string {
    if (grade >= 10 && grade <= 12) {
      return 'high-grade';
    } else if (grade >= 7 && grade <= 9) {
      return 'medium-grade';
    } else {
      return 'low-grade';
    }
  }
  getGradeStyle(grade: number): any {
    if (grade >= 10 && grade <= 12) {
      return { 'color': 'green', 'font-weight': 'bold' };
    } else if (grade >= 7 && grade <= 9) {
      return { 'color': 'orange', 'font-weight': 'bold' };
    } else {
      return { 'color': 'red', 'font-weight': 'bold' };
    }
  }
}