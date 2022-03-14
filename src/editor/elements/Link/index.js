import { useSelected, useFocused, useSlateStatic } from "slate-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlink, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { removeLink } from "../../utils/link";

import "./styles.css";

const Link = ({ attributes, element, children }) => {
  const editor = useSlateStatic();
  const selected = useSelected();
  const focused = useFocused();

  return (
    <div className="element-link">
      <a {...attributes} href={element.href}>
        {children}
      </a>
      {selected && focused && (
        <div className="popup" contentEditable={false}>
          <a href={element.href} rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            {element.href}
          </a>
          <button onClick={() => removeLink(editor)}>
            <FontAwesomeIcon icon={faUnlink} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Link;
