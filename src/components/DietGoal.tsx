// This is a type not an object or func etc.
import { type PropsWithChildren } from 'react';

/* Another way to define our type, use the `PropsWithChildren` type with title prop and is the type of string. */
// OnDelete is the name of prop in the DietGoal component in DietGoalList component file.
// Props object with id property which will be a number type.
type DietGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

/* Define the type for React `props` parameter.
Connect - up from the `title` and `description` from the return statement to the props parameters.
Use the `DietGoalProps` as a type for the Props object since its already defined above.
*/
export default function DietGoal({
  title,
  id,
  children,
  onDelete,
}: DietGoalProps) {
  // Pass the id to the onDelete func in the onClick prop that we have extracted in the props object inside of the DietGoal func.
  // React accessibility: use React Frangment (semanic react tag) rather than div element which is not a semanic html tag
  return (
    <article>
      <>
        <h2>{title}</h2>
        {children}
      </>
      {/* Handle clicks on that delete button. Inside of this anonymus func, manually invoke the onDelete() func that has id parameter passed into it. */}
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
