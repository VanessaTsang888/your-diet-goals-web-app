// Use Discriminated Union to build flexible component that accepts different modes that
// also conditionally requires an additional Prop for one of the two modes.
// Allows us to build way more flexible components and in general TS allows us to write more flexible code.
import { type ReactNode } from 'react';

// Discriminated Union: two type definitions. Two Props objects.
// Display this box in `hint` mode
type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};

// Display this box in 'warning' mode
type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
};

// Third type - the Union of HintBoxProps or WarningBoxProps.
// Allowing both Props objects but they have different properties depending on the mode that was chosen.
type InfoBoxProps = HintBoxProps | WarningBoxProps;

// Define and export our `info` box func. We offer 2 versions of infoBox, either `hint` or `warning`.
export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;

  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }

  // Now we've made it pass the above `if` check the mode can't be `hint` so must be warning.
  // Destructure `severity` from `props`. Execute this is the mode is not set to `hint`.
  //  So now we have a severity prop.
  const { severity } = props;

  // Output/display infoBox feature as warning mode.
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
