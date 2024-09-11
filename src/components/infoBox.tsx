// Import the type ReactNode from react so we can type our children prop with it.
import { type ReactNode } from 'react';

// InfoBox props type contains two props and they are both typed using TS.
// Use a Union type featue and the literal type feature since the mode needs to be flexible: hint or warning mode.
// children prop must be typed as `ReactNode` and must be imported from 'react' at the top of this component file.
type InfoBoxProps = {
  mode: 'hint' | 'warning';
  children: ReactNode;
};

// Define and export our `info` box func. We offer 2 versions of infoBox, either `hint` or `warning`.
// Output/display infoBox feature as hint mode.
// Use object destructuring to pull-out the mode and children props.
// Check ff mode is the same as 'hint'. If so, display the `children` object. Otherwise display the `children` from the second return statement.
// Set different css classes depending on the mode is 'hint' or 'warning'.
export default function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }

  // Output/display infoBox feature as warning mode.
  return (
    <aside className='infobox infobox-warning warning--medium'>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
