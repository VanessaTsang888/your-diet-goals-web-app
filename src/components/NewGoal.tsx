import { useRef, type FormEvent } from 'react';
// Set `FormEvent` type on the event object param that is provided by React for type safety.
export default function NewGoal() {
  // Once these Refs are created we connect them to the DOM elements within the return statement.
  // Initialise with null value as we don't have a value yet but will do later.
  // The related type of useRef() is the type of value that will eventually be managed by useRef.
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // I'm sure that this current goal value will never become null as in the DOM (JSX) the ref prop, we have set it to `goal` object.
    // To let TS know this we add the exclamation mark after the potentially null value.
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
  }
  // `handleSubmit` value passed into onSubmit prop is connected to the nested `handleSubmit` func above.
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input id='goal' type='text' name='goal' ref={goal} />
      </p>
      <p>
        <label htmlFor='summary'>Short Summary</label>
        <input id='summary' type='text' ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
