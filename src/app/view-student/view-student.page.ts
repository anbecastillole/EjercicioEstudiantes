import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage implements OnInit {

  public student: Student;

  constructor(private studentService: StudentService, private aroute: ActivatedRoute) { }

  ngOnInit() { //se lanza cuand ose carga la página
    this.aroute.queryParams.subscribe(
      (params)=>{
        const res = params.get
        console.log(params.controlnumber+"Hola");
        this.student = this.studentService.getStudentByControlNumber(params.controlnumber);
      }
    ); //se utiliza ej promises de js
   

  }

}
