To make the `ToastService` available across multiple modules in Angular (including `Shared`, `RDA`, and `App`), follow these steps:

### 1. Create the `ToastService` in the `Shared` Module

Since the `ToastService` will be part of the `Shared` module and needs to be accessible throughout your app, place it inside the `Shared` module and import it wherever required.

First, generate the `ToastService`:

```bash
ng generate service shared/toast
```

In `toast.service.ts`, create the service that can be used to show toast messages across all modules:

```typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<{ message: string; duration: number }>();
  toast$ = this.toastSubject.asObservable();

  constructor() {}

  show(message: string, duration: number = 3000) {
    this.toastSubject.next({ message, duration });
  }
}
```

This `ToastService` has a `Subject` that emits toast messages. Other components or modules can subscribe to this service to receive toast notifications.

### 2. Create the `ToastComponent` in `Shared`

Create the `ToastComponent` in the `Shared` module that listens to the `ToastService` and displays the messages.

Generate the `ToastComponent`:

```bash
ng generate component shared/toast
```

In `toast.component.ts`, subscribe to the `ToastService` and show the toast messages:

```typescript
import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  toasts: any[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toast$.subscribe((toast) => {
      this.toasts.push(toast);
      setTimeout(() => this.removeToast(toast), toast.duration);
    });
  }

  removeToast(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
```

### 3. Create the `ToastComponent` HTML and CSS

In `toast.component.html`, display the toast messages:

```html
<div class="toast-container">
  <div *ngFor="let toast of toasts" class="toast">
    {{ toast.message }}
  </div>
</div>
```

In `toast.component.css`, style the toasts:

```css
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1050;
}

.toast {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.toast:hover {
  opacity: 1;
}
```

### 4. Add `ToastComponent` to `SharedModule`

Make sure the `ToastComponent` is part of the `SharedModule` declarations and exports so it can be used in any module:

In `shared.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule],
  exports: [ToastComponent], // Export ToastComponent to use in other modules
})
export class SharedModule {}
```

### 5. Use the `ToastService` and `ToastComponent` Across Modules

Now that the `ToastService` is provided in the `SharedModule`, you can use it in any module (`RDA`, `App`, etc.).

**In `AppModule`, `RDAModule`, etc.:**

- Import the `SharedModule` in each module where you want to use the toast service and component.

In `app.module.ts`, import the `SharedModule`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule, // Import SharedModule to use the ToastComponent and service
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**In `rda.module.ts`:**

```typescript
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule, // Import SharedModule here as well
  ],
})
export class RDAModule {}
```

### 6. Display the `ToastComponent` in `AppComponent` (or Any Other Root Component)

Place the `ToastComponent` in your root component template (`app.component.html` or any common layout component):

```html
<app-toast></app-toast>
<router-outlet></router-outlet>
```

This ensures that the `ToastComponent` is always present in the DOM and can display messages.

### 7. Trigger Toast Messages from Any Module

Now you can inject the `ToastService` and trigger toasts from any module.

For example, in `AppComponent`:

```typescript
import { Component } from '@angular/core';
import { ToastService } from './shared/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private toastService: ToastService) {}

  showToast() {
    this.toastService.show('This is a toast message!', 5000);
  }
}
```

Similarly, in any other component in `RDA` or `App`, you can inject the `ToastService` and call `show()` to display a toast message.

This setup will allow the `ToastService` to be globally accessible and reusable across your `Shared`, `RDA`, and `App` modules.
