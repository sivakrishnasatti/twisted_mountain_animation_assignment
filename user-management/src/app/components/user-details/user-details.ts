import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../../services/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss'
})
export class UserDetails {
  user: any;
  
  constructor(private route: ActivatedRoute, private userService: User, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUsers().subscribe(users => {
      this.user = users.find(u => u.id.toString() === id);
    });
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  // In any component (especially details), on destroy:
  ngOnDestroy(): void {
    (document.activeElement as HTMLElement)?.blur?.();
  }

  getDisplayName(): string {
    return (
      this.user?.name ||
      this.user?.fullName ||
      this.user?.firstName ||
      this.user?.profile?.name ||
      'User Details'
    );
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
