import { useRef, type FormEvent } from 'react';

// Type for onAddGoal property will be a func that returns nothing (void is the return type). So this prop will be a func which we'll use later.
type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

// Set `FormEvent` type on the event object param that is provided by React for type safety.
// Use destructuring to pull out the onAddGoal func.
export default function NewGoal({ onAddGoal }: NewGoalProps) {
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
    // Clear form inputs after extracting the values from inputs or once user has added a goal using the built-in reset method.
    event.currentTarget.reset();

    // Call func as we want to use the goal current value and the summary current value that is saved in those two objects - the two string values.
    onAddGoal(enteredGoal, enteredSummary);
  }
  // `handleSubmit` value passed into onSubmit prop is connected to the nested `handleSubmit` func above.
  // `aria-required` attributes: inputs must have a value. Ensures users navigating with the aid of assistive technologies understand which semantic form controls need valid content.
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input
          id='goal'
          type='text'
          name='goal'
          ref={goal}
          required
          aria-required='true'
        />
      </p>
      <p>
        <label htmlFor='summary'>Short Summary</label>
        <input
          id='summary'
          type='text'
          name='summary'
          ref={summary}
          required
          aria-required='true'
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
