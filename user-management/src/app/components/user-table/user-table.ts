import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../services/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-table.html',
  styleUrl: './user-table.scss'
})
export class UserTable {
users: any[] = [];
  headers: string[] = [];

  constructor(private userService: User, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.headers = Object.keys(this.users[0]);
    });
  }

  onRowClick(user: any) {
    this.router.navigate(['/details', user.id]);
  }

  // In any component (especially details), on destroy:
  ngOnDestroy(): void {
    (document.activeElement as HTMLElement)?.blur?.();
  }


}
