/* Define the type for React`props` parameter.
Connect - up from the `title` and `description` from the return statement to the props parameters.
This is our object type which is of string. */
export default function DietGoal({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
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
