import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/AuthService/auth-service.service';
import { ToastrService } from '../../../service/SystemService/toastr.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  viewProfile(): void {
    // Navigate to profile page
    this.toastr.info('Thông báo', 'Chức năng đang được phát triển');
    // this.router.navigate(['/profile']);
  }

  changePassword(): void {
    // Navigate to change password page
    this.toastr.info('Thông báo', 'Chức năng đang được phát triển');
    // this.router.navigate(['/change-password']);
  }

  settings(): void {
    // Navigate to settings page
    this.toastr.info('Thông báo', 'Chức năng đang được phát triển');
    // this.router.navigate(['/settings']);
  }

  logout(): void {
    this.authService.logout();
    this.toastr.success('Thành công', 'Đăng xuất thành công');
    this.router.navigate(['/login']);
  }
}
