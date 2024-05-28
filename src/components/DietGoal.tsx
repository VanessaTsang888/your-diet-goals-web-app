// Outsource (refactored) the type to make the code more readable and more extensible.
interface DietGoalProps {
  title: string;
  description: string;
}

/* Define the type for React`props` parameter.
Connect - up from the `title` and `description` from the return statement to the props parameters.
Use the `DietGoalProps` as a type for the Props object since its already defined above this func.
 */
export default function DietGoal({ title, description }: DietGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
