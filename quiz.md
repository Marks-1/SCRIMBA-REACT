1. Why do we need to `import React from "react"` in our files?
- React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
- JavaScript object. React elements that describe what React should eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
- We need our JSX to be nested under a single parent element.

- different elements, which in this case returns an error since JSX only returns a single element. Use <div> to wrap them as a single element


4. What does it mean for something to be "declarative" instead of "imperative"?
 - Declarative - means i can tell the computer WHAT to do - and expect it to handle the details
 - Imperative - mean I need to tell it HOW to do each step. I have to specify step by step procedure to do a given task

 - analogy. telling someone to make you tea.

5. What does it mean for something to be "composable"?
 - We have small pieces that we can put togther to make something larger/greater
 - Capability to create entire component from simple components