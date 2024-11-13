import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Service call API
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          // Success, save token to local storage and redirect to home page
          if (typeof window !== 'undefined') {
            const token = response.accessToken;
            localStorage.setItem('token', token);
            // // Giải mã token để lấy thông tin user
            // const decodedToken: any = jwtDecode(token);
            // const user: User = {
            //   id: decodedToken.id,
            //   fullname: decodedToken.fullname,
            //   username: decodedToken.sub,
            //   email: decodedToken.email,
            //   phone: decodedToken.phone ?? '',
            //   address: decodedToken.address ?? '',
            //   role: decodedToken.roles.join(', '), // Chuyển mảng roles thành chuỗi
            // };

            // // Lưu thông tin user vào localStorage
            // localStorage.setItem('user', JSON.stringify(user));

            this.router.navigate(['/home']);
          }
        },
        error: (error) => {
          // Error handling
          this.errorMessage =
            'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.';
          console.error('Login error', error);
        },
      });
    }
  }
}
