import {
  RouteObject,
  IndexRouteObject,
  NonIndexRouteObject,
} from 'react-router-dom';

interface MyIndexRouteObject extends IndexRouteObject {
  label: string
  children?: RouteSetting[]
}

interface MyNonIndexRouteObject extends NonIndexRouteObject {
  label: string
}

// export type RouteSetting = MyIndexRouteObject | MyNonIndexRouteObject;
export interface RouteSetting extends Omit<RouteObject, 'children'> {
  label: string,
  isParentHide?: boolean
  show?: boolean
  children?: RouteSetting[]
}
