// using the special type keyword as ReactNode is a type.
import { type ReactNode } from 'react';

// Set-up custome prop as an object. `children` prop must be of type ReactNode.
// image will be of type object. The src and alt property should be of type string.
type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
// Distribute the image object (spread them as key-value-pairs) which contains
// the source and alt properties on to the image tag.
// React accessibility: title attribute - tooltip for users with reduced vision
export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img
        {...image}
        title='logo for Your Diet Goals management website application'
      />
      {children}
    </header>
  );
}
