// Import DietGoal component as we will use it down in the return statement - JSX syntax.
import DietGoal from './DietGoal.tsx';
// To solve the name clash problem, assign an alias to that import. We give the imported type a differnt name - DGoal.
// Then in the DietGoalKistProps -> goals prop, we make it clear its an Array of CGoal values.
import { type DietGoal as CGoal } from '..App.tsx';

// A set of empty Array at the end as its an Array of objects, not a single object.
// The type for goals prop is we make it clear that its an Array of `CGals` values which is defined in the DietGoal type inside of App component.
// OnDelete prop has func type where we expect to get one parameter.
type DietGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

// Use destructuring to get hold of `goals`.
// Pass a func to map where we get our individual goal and return the element we want to output for eery goal which is a list item and inside that is our DietGoal component.
// Extract onDelete from props object.
// Pass onDelete prop to DietGoal component and forward our onDelete.
// Make the id prop with `goal.id` available inside of DietGoal component.
export default function DietGoalList({
  goals,
  onDeleteGoal,
}: DietGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <DietGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </DietGoal>
        </li>
      ))}
    </ul>
  );
}
