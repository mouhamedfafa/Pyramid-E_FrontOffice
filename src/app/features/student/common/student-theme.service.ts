import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type StudentTheme = 'teal' | 'navy' | 'indigo';

@Injectable({ providedIn: 'root' })
export class StudentThemeService {
  private readonly STORAGE_KEY = 'student-sidebar-theme';

  theme$ = new BehaviorSubject<StudentTheme>(this.loadTheme());

  private loadTheme(): StudentTheme {
    return (localStorage.getItem(this.STORAGE_KEY) as StudentTheme) || 'teal';
  }

  setTheme(theme: StudentTheme): void {
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.theme$.next(theme);
  }
}
