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
Children passed to a custom component can be anything, as long as that component transforms them into something React can understand before rendering.

**Event Binding with "this"**

V1 - `<button onClick={this.changeText.bind(this)}>click</button>`
V2 - `<button onClick={()=> changeText()}>click</button>`
V3: -

```
constructor(props){
    super(props)
this.Changetext = this.Changetext.bind(this)
}

<button onClick={this.changeText}>click</button>
```

V4: -

```
ChangeText = () => {
    this.setState({
        message: "Hello",
    });
};

<button onClick={this.changeText}>click</button>
```

###### Conditional Rendering

-   if/else
-   Element Variables
-   Ternary conditional operator
-   Short circuit operator

###### Keys & Lists

-   A "Key" is a special string attribute you need include when creating lists of elements.
-   Keys give the elements a stable identity.
-   Keys help React identify which items have changed, are added, or are removed.
-   Help in efficient update of the user interface.

`key={list.id}`

**When to use index as a key?**

`const nameList = names.map((name, index) => <h1 key={index}>{name}</h1>);`

1.The items in your list do not have a unique id.
2.The list is a static list and will not change.
3.The list will never be reordered or filtered.

###### Styling React Components

-   css styles sheets
-   inline styling
-   css modules
-   css and js libraries
