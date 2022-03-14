import { useSlateStatic } from "slate-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faImage
  // faBold,
  // faItalic,
  // faUnderline,
  // faStrikethrough
} from "@fortawesome/free-solid-svg-icons";

import { insertImage } from "../../utils/image";
import { insertLink } from "../../utils/link";

import "./styles.css";

const Toolbar = () => {
  const editor = useSlateStatic();

  const handleInsertImage = () => {
    const url = prompt("Enter an Image URL");
    insertImage(editor, url);
  };

  const handleInsertLink = () => {
    const url = prompt("Enter a URL");
    insertLink(editor, url);
  };

  return (
    <div className="toolbar">
      {/* <button aria-label="Bold" title="Bold">
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button aria-label="Italic" title="Italic">
        <FontAwesomeIcon icon={faItalic} />
      </button>
      <button aria-label="Underline" title="Underline">
        <FontAwesomeIcon icon={faUnderline} />
      </button>
      <button aria-label="Strike Through" title="Strike Through">
        <FontAwesomeIcon icon={faStrikethrough} />
      </button> */}
      <button
        onClick={handleInsertImage}
        aria-label="Insert Image"
        title="Image"
      >
        <FontAwesomeIcon icon={faImage} />
      </button>
      <button onClick={handleInsertLink} aria-label="Insert Link" title="Link">
        <FontAwesomeIcon icon={faLink} />
      </button>
    </div>
  );
};

export default Toolbar;
