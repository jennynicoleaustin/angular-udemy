By default, all properties of components are only available within that component
- must explicitly state decorator 
  - @Input('assign element alias')


#### View Encapsulation 
- css files are localized and css style added to the component css file won't effect others 
- Override 
  - add to the @Component decoration 
    - encapsulation: ViewEncapsulation.None 
      - 3 variations to the ViewEncapsulation 
