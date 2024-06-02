import { useState } from 'react';
import DietGoal from './components/DietGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';

// Define our type for `DietGoal`
type DietGoal = {
  title: string;
  description: string;
  id: number;
};

// useState() func hook to generate new goals and dynamically display them on the screen.
// Alternative syntax is the default Array type: `const [goals, setGoals] = useState<Arry<DietGoal>>([]);`
// The state we want to manage here should be an Array of `DietGoal` -> an Arry of certain values.
export default function App() {
  const [goals, setGoals] = useState<DietGoal[]>([]);

  // logic for manipulating empty Array inside useState([]) func with the help of `setGoals`.
  // Spread the existing goal array into new goal array - copy all elements of existing array into new array.
  // Then add new object at the end of the shape of `Diet Goal` type.
  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: DietGoal = {
        id: Math.random(), // generate a random number
        title: 'Set and manage your diet goals on the move',
        description: 'Loose weight faster',
      };
      // At the end of this new state snapshot, so that `newGoal` array that we setting up here. Then we can use `goals` element to dynamically output below list of DietGoal components.
      return [...prevGoals, newGoal];
    });
  }

  {
    /* Within the unordered list, use `goals` state and map method to convert 
    the list of `DietGoal` objects. Output a list item and in that list item, 
    our DietGoal component. React wants `Key` prop to output a list. Both `goals` and `goal` are now both type of `DietGoal` */
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Diet Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      {/* Pass a func to map where we get our individual goal and return the element we want to output for eery goal which is a list item and inside that is our DietGoal component. */}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <DietGoal title={goal.title}>
              <p>{goal.description}</p>
            </DietGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
