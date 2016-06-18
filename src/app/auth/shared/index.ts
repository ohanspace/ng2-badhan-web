import { AuthService } from './auth.service';


export { AuthService };
export * from './firebase.provider';
//export { AuthRouteHelper } from './auth-route-helper';


export const AUTH_PROVIDERS: any[] = [
  AuthService
];
