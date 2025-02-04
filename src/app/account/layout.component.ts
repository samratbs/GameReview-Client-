﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.service';


@Component({
    templateUrl: 'layout.component.html' 
})
export class LayoutComponent {
    constructor(
        private router: Router,
        private userService: UserService
    ) {
        // redirect to home if already logged in
        if (this.userService.userValue) {
            this.router.navigate(['/']);
        }
    }
}