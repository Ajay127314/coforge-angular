import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  formdata:any;

  ngOnInit()
  {
    this.formdata=new FormGroup({
      emailid:new FormControl("ajay@gmail.com"),
      passwd:new FormControl("1234")
    });
  }

  onClickSubmit(data:any){
    this.formdata.emailid=data.emailid;
    alert("hello "+this.formdata.emailid)}


}
