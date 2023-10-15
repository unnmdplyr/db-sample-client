import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.user = new User();
  }

  onSubmit(userForm: NgForm) {
    console.log("Form submitted.")
    console.log(userForm.value)

    this.mapFormData(userForm)

    this.userService.save(this.user)
                    .subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  private mapFormData(userForm: NgForm) {
    this.user.id = ""
    this.user.name = userForm.value.username
    this.user.email = userForm.value.useremail
    console.log(this.user)
  }
}
