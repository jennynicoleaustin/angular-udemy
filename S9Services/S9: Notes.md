### Dependency Injection 
- injects an instance of the class automatically by telling angular we needed it 
- add constructor to the component where you want to use the service 
  - add a parameter in the constructor (private name:ServiceYouAreInjecting)
- Also need to "provide the service "
  - add to the component decorator
    - providers: [ServiceClassToInject]
- Once injected it can be used anywhere in the class along with its methods 

Hierarchical Injector 
- If we provide a service in our app in one component 
  - the component we inject with the service AND all the children receive the service
    - the same instance of the service is giving to the component and all its children 
- App Module == Application-wide Service
  - available in all components 
  - available in all SERVICES 
- App Component 
  - available in all components (not for other services )
- Single Component 
  - same instance of the service available in that component and all its children. 
