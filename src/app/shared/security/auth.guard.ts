import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthGuardData, createAuthGuard } from 'keycloak-angular';

const isAccessAllowed = async (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  const { authenticated, grantedRoles, keycloak } = authData;

  // Force the user to log in if currently unauthenticated.
  if (!authenticated) {
    await keycloak.login({
      redirectUri: window.location.origin + _.url,
    });
  }

  // Get the roles required from the route.
  const requiredRoles = route.data['roles'];

  // Allow the user to proceed if no additional roles are required to access the route.
  if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
    return true;
  }

  // Allow the user to proceed if all the required roles are present.
  if (
    requiredRoles.every((role) =>
      Object.values(grantedRoles.resourceRoles).some((roles) =>
        roles.includes(role)
      )
    )
  ) {
    return true;
  }

  const router = inject(Router);
  return router.createUrlTree(['/403']);
};

export const canActivateAuthRole =
  createAuthGuard<CanActivateFn>(isAccessAllowed);
