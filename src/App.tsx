import DietGoal from './components/DietGoal.tsx';

// JSX Code: the paragraph element is the children and we define the type for it in the DietGoal.tsx component file.
export default function App() {
  return (
    <main>
      <DietGoal title='Set and manage your diet goals'>
        <p>Loose weight and get fit</p>
      </DietGoal>
    </main>
  );
}
