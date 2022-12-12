export class TokenProvider {
    static getAccessToken() {
      return localStorage.getItem('access_token');
    }
  
    static getRefreshToken() {
      return localStorage.getItem('refresh_token');
    }
  
    static setAccessToken(token: string) {
      localStorage.setItem('access_token', token);
    }
  
    static setRefreshToken(token: string) {
      localStorage.setItem('refresh_token', token);
    }
  
    static removeTokens() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
}  