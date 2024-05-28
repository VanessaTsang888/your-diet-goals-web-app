// This is a type not an object or func etc.
// `import { type ReactNode } from 'react';`
import { type PropsWithChildren } from 'react';

/* Outsource (refactored) the type to make the code more readable and more extensible. The code: */
// The children prop is of React type
// interface DietGoalProps {
//   title: string;
//   children: ReactNode;
// }

/* Another way to define our type, use the `PropsWithChildren` type with title prop and is the type of string. */
type DietGoalProps = PropsWithChildren<{ title: string }>;

/* Define the type for React`props` parameter.
Connect - up from the `title` and `description` from the return statement to the props parameters.
Use the `DietGoalProps` as a type for the Props object since its already defined above this func.
 */
export default function DietGoal({ title, children }: DietGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
