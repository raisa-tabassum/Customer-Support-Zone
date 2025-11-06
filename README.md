1. What is JSX, and why is it used?
Answer: JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes creating React components easier and more readable. Without JSX, we have to write a lot of JavaScript code to create elements, which can get messy.


2. Difference between State and Props?
Answer:
Props: These are used to pass data from a parent component to a child component.Props are read-only, so the child component cannot modify them.

State: This is the data that belongs to a component and can change over time.A component can update its own state whenever needed.


3. What is the useState hook, and how does it work?
Answer: useState is a React hook that lets us add state to functional components.
Example:
const [count, setCount] = useState(0);

Here, count is the state variable, and setCount is a function to update it. Whenever setCount is called, the component re-renders with the new value.


4. How can you share state between components?
Answer: Usually, state is shared from a parent component to child components using props. If many components need the same state, we can use the Context API or a state management library like Redux.


5. How is event handling done in React?
Answer: Events in React are written as JSX attributes, using camelCase instead of lowercase.
Example:
<button onClick={handleClick}>Click Me</button>
Here, handleClick is a function that runs when the button is clicked.