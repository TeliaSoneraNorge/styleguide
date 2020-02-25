import React, { useState } from 'react';
import pretty from 'pretty';

interface Props {
  toggle?: boolean;
  language?: 'html' | 'css' | 'javascript' | 'markup';
  code?: string;
}

export default function CodeSnippet(props: Props) {
  const [isOpen, setOpen] = useState(false);

  function toggleHtmlClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setOpen(b => !b);
  }

  const showCodeSnippet = !props.toggle || isOpen;

  return (
    <div className="sg-code-snippet">
      {props.toggle && (
        <a href="#" className="link" onClick={toggleHtmlClick}>
          {isOpen ? 'Hide HTML' : 'Show HTML'}
        </a>
      )}

      {showCodeSnippet && (
        <pre className={`language-${props.language}`}>
          <code className={`language-${props.language}`}>{props.code ? pretty(props.code) : ''}</code>
        </pre>
      )}
    </div>
  );
}
