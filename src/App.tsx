import DietGoal from './components/DietGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';

// JSX Code: the paragraph element is the children and we define the type for it in the DietGoal.tsx component file.
export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Diet Goals</h1>
      </Header>
      <DietGoal title='Set and manage your diet goals'>
        <p>Loose weight and get fit</p>
      </DietGoal>
    </main>
  );
}
