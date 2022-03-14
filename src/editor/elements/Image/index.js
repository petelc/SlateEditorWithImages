import { useSelected, useFocused } from "slate-react";
import clsx from "clsx";

import "./styles.css";

const Image = ({ attributes, element, children }) => {
  const selected = useSelected();
  const focused = useFocused();

  return (
    <div
      {...attributes}
      className={clsx("element-image", { highlight: selected && focused })}
    >
      <div contentEditable={false}>
        <img alt={element.alt} src={element.src} />
      </div>
      {children}
    </div>
  );
};
export default Image;
