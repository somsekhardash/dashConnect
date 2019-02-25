import LandingPageC from './containers/LandingPageC';
import StartPageC from './containers/StartPageC';

const routes =  [
    {
    path: '/',
    exact : true,
    component: StartPageC
    },
    {
    path: '/landing',
    component: LandingPageC
    }
];

export default routes;
