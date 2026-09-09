import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AdminrhTheme = 'navy' | 'teal' | 'plum';

@Injectable({ providedIn: 'root' })
export class AdminrhThemeService {
  private readonly STORAGE_KEY = 'adminrh-sidebar-theme';

  theme$ = new BehaviorSubject<AdminrhTheme>(this.loadTheme());

  private loadTheme(): AdminrhTheme {
    return (localStorage.getItem(this.STORAGE_KEY) as AdminrhTheme) || 'navy';
  }

  setTheme(theme: AdminrhTheme): void {
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.theme$.next(theme);
  }
}
