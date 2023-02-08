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
- Relative path with this.router.navigate
  - works because the navigate method does not know which path you are currently on 
- extras: {relativeTo:this.route}
  - "ActivatedRoute" = the currently activated route
    - {relativeTo: this.route}

## Dynamically add parameters to paths in router 
- 'pathToAddTo/:whatParameterIsNamed
  - the : (colon) is what tells angular that this is a dynamic parameter.

### Accessing parameters 
- in the constructor add route:ActivatedRoute
  - to access the current route in use. 
- in ngOnInit, you can access the parameter 
  - this.route.snapshot.params['nameOfParam']
- Snapshot is OK for initial loading of parameter data 
  - but would not work for subsequent data grabs if the information changes without leaving the page. 
- for data that changes 
  - use this.route.params (params is an observable)
- Observable 
  - route might change in the future, so you use an observable to subscribe to an event and listen for changes in that event
- route.params.subscribe ( takes in 3 functions )
  - whenever the parameter changes 

#### Route Observables
- are destroyed automatically by angular when the component is destroyed
  - BUT.... other types of observables are not destroyed automatically. 

## Query Parameters
- [queryParams] = {keyvalue pairs to add}

## Parsing query params 
- they always come in as a string. so if you are using it to pass as a parameter of a function that expects a number you will need to parse it to num 
  - adding a + in front of the data will parse it to a number

## Nested Routes
- a way to nest routes that all start with the same base URL
- children are indicated through the "children:" value of route.
  - must specify what router outlet to use
  - because we want them nested 

### Query Params Handling 
- additional property in "extras" of navigate
  - takes a string can be...
    - merge -> merge with any new params we picked up along the way 
    - preserve -> keep parameters from before 

### Wildcard Routes 
- must be the very last route in the router
- { path: '**', redirectTo: '/whereEverYouWantItRedirectedTo' }

### Outsourcing Routes 
- Add a new file named app-routing.module.ts
  - add the router const
  - import = RouterModule.forRoot(routeName)
  - export = RouterModule
- Inside app.module
  - import AppRoutingModule

## Routing Guards 
- functionality, logic or code that is executed before a route is loaded or on exit of a route 

### canActivate Guard 
- protected routes 
- property added to the route you want it to apply to 
  - canActivate: [ allguards you want to be included ]
  - this gets applied to all children of this route. 

### canDeactivate
- control whether the user is allowed to navigate away from the page










