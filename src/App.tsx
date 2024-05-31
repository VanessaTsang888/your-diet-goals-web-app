
import { useState } from 'react';
import DietGoal from './components/DietGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';

// Define our type for `DietGoal` 
type DietGoal = {
  title: string;
  description: string;
  id: number;
}

// useState() func hook to generate new goals and dynamically display them on the screen.
// Alternative syntax is the default Array type: `const [goals, setGoals] = useState<Arry<DietGoal>>([]);`
// The type of values we want to manage is an Array of DietGoal `DietGoal[]`.
export default function App() {
  const [goals, setGoals] = useState<DietGoal[]>([]);

// logic for manipulating empty Array inside useState([]) func with the help of `setGoals`.
// Use the new goal array to update existing goal
  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: DietGoal = {
        id: Math.random(), // generate a random number
        title: 'Set and manage your diet goals on the move',
        description: 'Loose weight faster'
      };
      return [...prevGoals, newGoal]
    });
  }

{/* Within the unordered list, use `goals` state and map method to convert 
the list of `DietGoal` objects. Output a list item and in that list item, 
our DietGoal component. React wants `Key` prop to output a list. */}
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Diet Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
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
