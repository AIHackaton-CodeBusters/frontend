import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  setLanguage(language: string): void {
    localStorage.setItem('selectedLanguage', language);
    window.location.reload();
  }

  getSelectedLanguage(): string {
    return localStorage.getItem('selectedLanguage') || 'en'; // Default language
  }
}
