import React from 'react';

const Prism = window.Prism; // A global, added with a <script> tag in the HTML template

function toHighlightedHtml(code, language) {
    return Prism.highlight(code, Prism.languages[language])
}

const CodeSnippet = ({ code, language }) =>
    <pre className={`language-${language}`}>
        <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: toHighlightedHtml(code, language) }}></code>
    </pre>;

export default CodeSnippet;