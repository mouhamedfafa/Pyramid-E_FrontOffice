import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type InstructorTheme = 'caramel' | 'ember' | 'slate';

@Injectable({ providedIn: 'root' })
export class InstructorThemeService {
  private readonly STORAGE_KEY = 'instructor-sidebar-theme';

  theme$ = new BehaviorSubject<InstructorTheme>(this.loadTheme());

  private loadTheme(): InstructorTheme {
    return (localStorage.getItem(this.STORAGE_KEY) as InstructorTheme) || 'caramel';
  }

  setTheme(theme: InstructorTheme): void {
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.theme$.next(theme);
  }
}
