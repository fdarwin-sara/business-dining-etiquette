import { Component } from '@angular/core';

/**
 * Route targets are intentionally lightweight because the root app owns the
 * shared shell and renders each guide section from the active URL.
 */
@Component({
  selector: 'app-route-page',
  standalone: true,
  template: '',
})
export class RoutePageComponent {}
