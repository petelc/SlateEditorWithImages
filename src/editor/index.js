import { useState, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import pipe from "lodash/fp/pipe";

import Toolbar from "./components/Toolbar";

import Paragraph from "./elements/Paragraph";
import Image from "./elements/Image";
import Link from "./elements/Link";

import withImages from "./plugins/withImages";
import withKeyCommands from "./plugins/withKeyCommands";
import withLinks from "./plugins/withLinks";

import { createParagraphNode } from "./utils/paragraph";
import { createImageNode } from "./utils/image";
import { createLinkNode } from "./utils/link";

import "./styles.css";

const renderElement = (props) => {
  switch (props.element.type) {
    case "image":
      return <Image {...props} />;
    case "link":
      return <Link {...props} />;
    default:
      return <Paragraph {...props} />;
  }
};

const createEditorWithPlugins = pipe(
  withReact,
  withHistory,
  withImages,
  withLinks,
  withKeyCommands
);

const Editor = () => {
  const editor = useMemo(() => createEditorWithPlugins(createEditor()), []);
  const [value, setValue] = useState([
    createParagraphNode([
      {
        text:
          "Nicolas Kim Coppola (born January 7, 1964),[2][3] known professionally as Nicolas Cage, is an American actor and filmmaker. Cage has been nominated for numerous major cinematic awards, and won an Academy Award, a Golden Globe, and Screen Actors Guild Award for his performance in Leaving Las Vegas (1995). He earned his second Academy Award nomination for his performance as Charlie and Donald Kaufman in Adaptation (2002)."
      },
      createLinkNode("https://karlworks.com", "This is my Link")
    ]),
    createImageNode("Nicolas Cage GIF", "https://www.placecage.com/gif/600/250")
  ]);

  return (
    <div className="editor-wrapper">
      <Slate editor={editor} value={value} onChange={setValue}>
        <Toolbar />
        <Editable renderElement={renderElement} />
      </Slate>
    </div>
  );
};

export default Editor;
