import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {
  public student: Student;
  public myForm : FormGroup;
  public validatorsMessages: Object;

  constructor(private studentService: StudentService, private fb: FormBuilder) { }


  ngOnInit() {
    this.myForm= this.fb.group(
      {
        controlnumber:["",Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(8), Validators.pattern('^[0-9]+$')])],
        name:["",Validators.compose([Validators.required])],
        curp:["",Validators.compose([Validators.required,Validators.pattern("^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$")])], //pattern
        age:["",Validators.compose([Validators.required,Validators.min(17),Validators.pattern('^[0-9]+')])],
        nip:["",Validators.compose([Validators.required,Validators.min(10),Validators.max(9999)])],
        email:["",Validators.compose([Validators.required,Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z0-9-]{2,}$")])], //pattern
        photo:["",Validators.compose([Validators.required,Validators.pattern('^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$')])]
      }
    );
    this.validatorsMessages = {
      'controlnumber':[
        {type: 'required',message:"Número de control obligatorio"},
        {type: 'minlength',message:"Número de control debe ser de 8 dígitos"},
        {type: 'maxlength',message:"Número de control debe ser de 8 dígitos"},
        {type: 'pattern',message:"Número de control mal formado"}
      ],
      'name':[
        {type: 'required',message:"Nombre obligatorio"}
      ],
      'curp':[
        {type: 'required',message:"CURP obligatorio"},
        {type: 'pattern',message:"CURP mal formado"} //PATTERN
      ],
      'age':[
        {type: 'required',message:"Edad obligatoria"},
        {type: 'min',message:"Debes tener 17 años o más"},
        {type: 'pattern',message:"Ingresa sólo dígitos"}
      ],
      'nip':[
        {type: 'required',message:"NIP obligatorio"},
        {type: 'min',message:"Tu NIP debe tener mínimo 2 digitos"},
        {type: 'max',message:"Tu NIP debe tener máximo 4 digitos"}
      ],
      'email':[
        {type: 'required',message:"Email obligatorio"}, //PATTERN
        {type: 'pattern',message:"Email mal formado"}
      ],
      'photo':[
        {type: 'required',message:"Foto obligatoria"}, //PATTERN
        {type: 'pattern',message:"URL de foto mal formado"}
      ]

    }
  }

  public newStudent(): void {
    //construir el objeto
    this.studentService.newStudent(this.student);
  }


}
