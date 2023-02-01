By default, all properties of components are only available within that component
- must explicitly state decorator 
  - @Input('assign element alias')


#### View Encapsulation 
- css files are localized and css style added to the component css file won't effect others 
- Override 
  - add to the @Component decoration 
    - encapsulation: ViewEncapsulation.None 
      - 3 variations to the ViewEncapsulation 

### ngOnInit 
- Lifecycle hooks
  - Allows you to hook into the phases and execute the code (when present)
- New components are created in angular 
  - Angular goes through a few phases during the creation (and rendering to DOM) process 
    - ngOnChanges 
      - called when a bound input property changes (the properties decorated with @Input)
      - or when a promise is returned
      - executed when a new component is created & whenever the input changes 
    - ngOnInit
      - called when the component is initialized
      - object is created but is not yet displayed on the dom 
      - runs after the constructor
    - ngDoCheck
      - called anytime that a change detection is run 
      - change detection = if prop value changes, it knows it needs to rerender the template. 
      - on events angular checks to see if anything changes even if it doesnt change. 
      - useful to use for informing angular about some change that angular would not detect naturally 
    - ngAfterContentInit
      - called when content (ng-content) has been projected into the view 
        - not when the ng-content itself is visible on the view but when the parent component is added to the view. 
    - ngAfterContentChecked 
      - called when the projected content has been checked 
    - ngAfterViewInit
      - called after the components view (and child views have been initialized )
    - ngAfterViewChecked
      - called when the view and child views have been checked 
    - ngOnDestroyed
      - called before the object is destroyed by angular 
