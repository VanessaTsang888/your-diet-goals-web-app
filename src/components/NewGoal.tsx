import { type FormEvent } from 'react';
// This functional form component should return a form (built-in form element).
// Basic form with two input elements. Each input is connected by a label element.
// Logic to handle the form submission: nested func `handleDubmit()`.
// Connect this nested func to `onSubmit` prop in form element as we want to use it as a value for this prop.
// Set `FormEvent` type on the event object param that is provided by React for type safety.

export default function NewGoal() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input id='goal' type='text' />
      </p>
      <p>
        <label htmlFor='summary'>Short Summary</label>
        <input id='summary' type='text' />
      </p>
      {/* btn will by default submit form and trigger the submit event of form. 
      We can handle that by adding the `onSubmit` prop to form opening tag above. */}
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
