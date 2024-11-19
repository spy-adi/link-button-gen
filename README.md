import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentService } from './payment.service'; // Adjust the path as per your project structure

@Injectable({
  providedIn: 'root',
})
export class AccessGuard implements CanActivate {
  constructor(private paymentService: PaymentService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check access for PRDM
    if (this.paymentService.hasAccess('prdm')) {
      this.router.navigate(['/rda/prdm']);
      return false; // Prevent further navigation since we are redirecting
    }

    // Check access for Approvals
    if (this.paymentService.hasAccess('approvals')) {
      this.router.navigate(['/rda/approvals']);
      return false; // Prevent further navigation
    }

    // If no access, stay on the same page or route
    return false;
  }
}
