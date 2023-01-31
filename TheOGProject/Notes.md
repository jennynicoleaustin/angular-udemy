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
  - "styles" in the @Component
- app.component.css
- 
