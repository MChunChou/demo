import {RouteObject, createBrowserRouter, Outlet} from 'react-router-dom';
import config from './config';

export {config};
export default createBrowserRouter(config as RouteObject[]);

