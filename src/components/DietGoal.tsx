/* Define the type for React`props` parameter.
Connect - up from the `title` and `description` from the return statement to the props parameters.
Line 8 and 9: setting our own object type. We control whcih data we expect to get there.  */
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
