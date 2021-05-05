import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  public setCookie(key: string, value: string, expiry: string): void {
    document.cookie = `${key}=${value}; expires=${expiry}`;
  }

  public getCookie(key: string): string {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${key}=`))
      .split('=')[1];
    return;
  }

  public deleteCookie(key: string): void {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  }
}
