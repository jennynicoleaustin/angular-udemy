CLI to create new component
- Makes a new component folder and all the needed imports
  - ng g c componentName
    - ng generate component

Making a component 
- every component must have either a templateURL or template
- template: 'include the actual component you want here '
  - only for cases where you have very little code
- templateURL: 'relative path to component'
  - usually you will be using the external file

Styling
- inline
  - "styles" in the @Component decorator
- app.component.css

Selector (in the @Component decorator)
- basically works like a css selector
- if...
  - selector: '[app-server]'
  - then that app-server component now is an html attribute that you can add to html elements. 
- selector: '.app-servers'
  - recognized as a style added to a html element
- what doesn't work 
  - pseudo selectors

DataBinding
- communication between TS code and template (html)
- Output Data Options 
  - String Interpolation ({{ data }})
  - property binding ( [property] = "data" )
- React to user events
  - Event Binding ( (event) = "expression" )
- Combo of both 
  - Two-Way-Binding ( [ (ngModel)] = "data" )

String Interpolation 
- {{ }}
  - within the double curly braces you can write a ts expression 
  - any ts expression that can be resulted into a string at the end. 
  - You can not write multi line expressions here 
    - can write a ternary

Property Binding 
- [ ] = "function"

Which to use? 
- printing text -> use String interpolation 
- change property of html element -> property binding

Event binding 
- Done by adding () to the html element
  - ( functionGoesHere )

Dollar Sign Event

Directives 
- use @Directive
- instructions in the DOM 
  - like components (directive with templates )

Built in Directives worth using 
- NG if directive
  - must be an expression with a result that is true or false
    - *ngIf 
      - *means it is a structure directive - meaning it changes the structure of the dom
- NG if else 
  - #= local reference

Attribute Directives 
- ngStyle 
  - [ngStyle]= " { cssStyle: functionToConditionalRenderStyle() } "
- ngClass
  - 
- ngFor 
  - similar to a js for loop 



















