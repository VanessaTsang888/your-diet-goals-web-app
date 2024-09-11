import { type ReactNode } from 'react';
// Import DietGoal component as we will use it down in the return statement - JSX syntax.
import DietGoal from './DietGoal.tsx';
// To solve the name clash problem, assign an alias to that import. We give the imported type a differnt name - DGoal.
// Then in the DietGoalKistProps -> goals prop, we make it clear its an Array of CGoal values.
import { type DietGoal as CGoal } from '../App.tsx';
import InfoBox from './infoBox.tsx';

// The type for goals prop is we make it clear that its an Array of `CGals` values which is defined in the DietGoal type inside of App component.
// OnDelete prop has func type where we expect to get one parameter.
type DietGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

// Make the id prop with `goal.id` available inside of DietGoal component.
// Check if don't have any goals set. If so, display infoBox in 'hint' mode.
export default function DietGoalList({
  goals,
  onDeleteGoal,
}: DietGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no diet goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  // Override above default value if user set too many goals with this if statement check.
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning'>
        You've set a lot of goals. Don't over work yourself!
      </InfoBox>
    );
  }

  // Display warning infoBox mode.
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <DietGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </DietGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
