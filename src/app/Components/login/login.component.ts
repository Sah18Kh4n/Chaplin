import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Interfaces/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form !: FormGroup;
  id !: number;
  loading = false;
  submitted = false;
  error = '';
  users: User[] = [];

  constructor(public userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users)
    });

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get f() { return this.form.controls; }

  onSubmit(): void {

  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(res => {
      this.users = this.users.filter(item => item.id !== id);
      console.log('Post deleted successfully')
    })
  }
}
