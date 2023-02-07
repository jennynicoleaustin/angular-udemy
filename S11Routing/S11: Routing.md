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
#### Getting Links to work with our router 
- When using a href link each time you click the link the page will reload 
  - restarts the app on every navigation
    - not best practice 
- RouterLink, catches the even (click) and prevents the default (reload) and analyzes what we have passed to the routerLink and checks to find a route in router that matches. 
- html attribute routerLink="/pathYouWant"
#### Relative vs absolute path
- (no leading /)
  - appends the path to the current path you are on (relative to the page you are on)
    - ie RouterLink="servers" on page localhost:4200/servers = localhost:4200/servers/servers
- On the main "root" page you can use a relative path, since it only appends to the /
  - however any other page on our route will require an absolute path if you do not want it appended to the page you are on . 
- for relative paths. 
  - you can use relative paths similar to folder structure as well 

## Styling Active Links 
- routerLinkActive 
  - can be added to the link itself or to the wrapper element. 
- specify which class you would like to be toggled on when that link is active. 
  - routerLinkActive="active"
- by default this attribute will check to see which links use the currently active path and apply that class to ALL links that are active 
  - meaning by default both the home tab and the clicked users tab would have the active class added. 
  - To resolve...
    - [routerLinkActiveOptions]="{exact:true}"

## Navigating Programmatically 
- No link to use, but you want it to navigate based on a completed action or a button etc. 
- to use navigation router inside a function 
  - inject the router as an element in the components constructor
  - then use.... 
    - this.router.navigate('pathAsString')















