import DietGoal from './DietGoal.tsx';
// To solve the name clash problem, assign an alias to that import. We give the imported type a differnt name - DGoal.
// Then in the DietGoalKistProps -> goals prop, we make it clear its an Array of CGoal values.
import { type DietGoal as CGoal } from '..App.tsx';

// A set of empty Array at the end as its an Array of objects, not a single object.
// The type for goals prop is we make it clear that its an Array of `CGals` values which is defined in the DietGoal type inside of App component.
type DietGoalListProps = {
  goals: CGoal[];
};

// Use destructuring to get hold of `goals`.
// Pass a func to map where we get our individual goal and return the element we want to output for eery goal which is a list item and inside that is our DietGoal component.
export default function DietGoalList({ goals }: DietGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <DietGoal title={goal.title}>
            <p>{goal.description}</p>
          </DietGoal>
        </li>
      ))}
    </ul>
  );
}
