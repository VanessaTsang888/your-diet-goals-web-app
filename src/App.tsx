import { useState } from 'react';
import DietGoalList from './components/DietGoalList.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import NewGoal from './components/NewGoal.tsx';

// Define our type for `DietGoal`
export type DietGoal = {
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

  // Func to delete a goal from our list which is in the DietGoalList component.
  // If id in parameter is equal to id, condition will be false and goal will be dropped.
  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Diet Goals</h1>
      </Header>
      <NewGoal />
      <DietGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
