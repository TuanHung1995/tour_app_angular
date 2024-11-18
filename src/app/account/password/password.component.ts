import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent implements OnInit {

  changePasswordForm!: FormGroup;

  order: any;

  user: any;

  constructor(private authService: AuthService,
    private localStorageService: LocalStorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getInfomation();
    this.changePasswordForm = this.fb.group({
      userId: [this.user.id, [Validators.required]],
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Get user information
  getInfomation(): void {
    const getUserData = () => JSON.parse(localStorage.getItem('user') || '{}');
    this.user = getUserData();
  }

  // Change password
  changePassword(): void {
    this.authService.resetPassword(this.changePasswordForm.value).subscribe({
      next: (data) => {
        alert(data.message);
      },
      error: (error) => {
        console.log(this.changePasswordForm.value);
        console.error('Error changing password:', error);
      },
    });
  }

}
