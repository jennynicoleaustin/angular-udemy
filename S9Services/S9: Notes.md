### Dependency Injection 
- injects an instance of the class automatically by telling angular we needed it 
- add constructor to the component where you want to use the service 
  - add a parameter in the constructor (private name:ServiceYouAreInjecting)
- Also need to "provide the service "
  - add to the component decorator
    - providers: [ServiceClassToInject]
- Once injected it can be used anywhere in the class along with its methods 
