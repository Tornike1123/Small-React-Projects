# Small-React-Projects

Small React projects

1. use-state - simple projects for understanding how works React **useState** Hook.

---

2. class-components - how works **class components**

###### Adventage of Function(Stateless) Components:

-   Simple functions
-   Use Func components as much as possible
-   Absence of 'this' keyword
-   Solution without using state
-   Mainly responsible for the UI
-   Stateless/ Dumb/ Presentational

###### Adventage of Class(Stateful) Components:

-   More feature rich
-   Maintain their own private data - state
-   Complex UI logic
-   Provide lifecycle hooks
-   Stateful/Smart/Container

---

###### PROPS VS STATE

**PROPS**

-   Props get passed to the component
-   Function parameters
-   Props are immutable
-   Props - Functional Components
-   this.Props - Class Components

**STATE**

-   State is managed within the component
-   Variables declared in the function body
-   State can be changed
-   useState Hook - Functional Components
-   this.state - Class Components

**props.children**
props.children works just like any other prop in that it can pass any sort of data, not just the sorts that React knows how to render. For example, if you have a custom component, you could have it take a callback as props.
Children passed to a custom component can be anything, as long as that component transforms them into something React can understand before rendering. i
