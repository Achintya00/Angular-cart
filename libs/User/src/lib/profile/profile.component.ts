import { Component, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from '../services/user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../models/user.models';
@Component({
  selector: 'lib-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  userService = inject(UserService);
  user = toSignal(this.userService.getUserDetails());
  fb = inject(FormBuilder);
  profileForm!: FormGroup;
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: this.fb.group({
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });
  }
}
