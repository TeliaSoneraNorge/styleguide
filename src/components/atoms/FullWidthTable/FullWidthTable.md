Status: *in progress*.

This table component use negative margins to achieve full width rows in the table,
and padding to add back the negative margin value. To avoid horizontal scrolling
it is important to style the nearest full width element with <code>overflow-x: hidden;</code>.

It's also recommended to use this component within an element with a styling that centers-, and
sets the content to a max-width.