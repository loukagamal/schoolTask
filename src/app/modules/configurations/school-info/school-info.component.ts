import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { acadimicYear } from '../../models/acadimicYear';
import { AcademicYearService } from '../../services/academic-year.service';
import { SchoolInfoService } from '../../services/school-info.service';

@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.scss']
})
export class SchoolInfoComponent implements OnInit {
  schoolInfoForm:FormGroup = new FormGroup({}); 
  academicYearData!:acadimicYear[];


  constructor(private fb:FormBuilder , private academicService: AcademicYearService ,private schoolService :SchoolInfoService) { this.initForm();}

  ngOnInit(): void {
    this.getAcademicYear();
  }
  initForm(){
    this.schoolInfoForm = this.fb.group({
      shcoolName:['',[Validators.required]],
      schoolAddress:['',[Validators.required]],
      schooWebsite:['',[Validators.required]],
      schoolLogo:[''],
    })
  }
  onSubmit(){

    this.schoolService.setAcadimicYear(this.schoolInfoForm.value);
   
  }

  getAcademicYear():acadimicYear[]{

    this.academicService.getAllAAcademicYear().subscribe((res: any) => {
      this.academicYearData = res;
    
    });


    return this.academicYearData;


  }
 
}
