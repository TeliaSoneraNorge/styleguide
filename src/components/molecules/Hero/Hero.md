Status: *finished*.

The heading in the white box should span a maximum of three lines
and the sentence below should span a maximum of two lines.

In smaller browser widths there is a coloured field below the image and beneath the white box
to avoid having the box on top of the image. It's recommended to set the colour for this field to
one of the colours that appear in the very bottom of the image above to make it look seamless.

You can add pebbles to the page by adding <code>.hero--with-pebbles</code>.
If you want the pebbles only on desktop or mobile you can in addition add
<code>.hero--with-pebbles-only-on-mobile</code> or <code>.hero--with-pebbles-only-on-desktop</code>.
Choose between different variation of pebbles by adding
<code>.hero--with-pebbles-variant-1</code> (number 1-4 exists).
There is also one for black friday <code>.hero--with-pebbles-black-friday</code> and
one for easter <code>.hero--with-pebbles-easter</code>.

Image recommendations from designers:
- Images in the size of 1440x620px or the same width/height format seems to be a good size to use in this component.
- Avoid using images that contains a lot of white color as this will blend in with the content and the user might not differ the picture from the rounded mask or the overlapping content.
- Images of nature and people are easier to match with this component than portrait images.

The Hero image has a max-height of 620px, and when the width of the browser is bigger than 1440px
the image is center aligned and gets cropped from both the top and bottom by default. If you want
the image to be top aligned use the css modifier class
<code>.hero&#95;&#95;image--top-aligned</code> on the image-element instead. If you want it to be bottom-aligned
use <code>.hero&#95;&#95;image--bottom-aligned</code>.
