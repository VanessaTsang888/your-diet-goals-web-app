
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
export default function App() {
  const [goals, setGoals] = useState<DietGoal[]>([]);

// logic for manipulating empty Array inside useState([]) func with the help of `setGoals`.
  function handleAddGoal() {
    setGoals();
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Diet Goals</h1>
      </Header>
      <button onClick={handleAddGoal()}>Add Goal</button>
      <DietGoal title='Set and manage your diet goals'>
        <p>Loose weight and get fit</p>
      </DietGoal>
    </main>
  );
}
