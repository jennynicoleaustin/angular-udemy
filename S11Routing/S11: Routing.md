## Routing in Angular
- Current set up of application (before implementing router)
  - we load all sections of the application at once. 
- Goal = dynamically load each section of the application as we navigate to the page. 

#### Within the app module include the following above the @NgModule decoration 
the Routes const is always an array with JS objects that include a path (the portion entered after the domain ). 
- path:  'stringWithThePathYouWant'
- tell it what you want it to do, usually to load a component. 
const appRoutes: Routes  =  [
{ path: 'users', component:UsersComponent  } 
]
#### Once you have created the routes const you must register them in your app. 
- within the imports section in the app.module
  -     RouterModule.forRoot(appRoutes)
#### Then.... include your components in your app.component.html 
- <router-outlet></router-outlet>
  - marks the place in the app where we want the currently selected route to be loaded 