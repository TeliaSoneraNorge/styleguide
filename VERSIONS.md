# Versioning

This file should contain all changes in the Styleguide.

- Use version in package.json ("version": "1.1.0")
- The numbers represent, "Major", "Minor" and "Patch"
- "Major" is reserved for rewrites of the styleguide, or entire Telia design rebrands (extremely rare).
- "Minor" in this context means _breaking changes_ - such as a change in a components HTML structure, or a change in a CSS class name.
- "Patch" is reserved for smaller CSS changes, tweaks and improvements. Styleguide users are safe to upgrade to new patches.
  Also, _new components_ and _new component variants_ are also patches, since they do not break anything for other channels.

For Major and Minor changes in version you must notify everyone in the #styleguide Slack Channel.

# Version History

Only noteworthy changes.

# 1.56.0

- Enabled CSS variables

# 1.50.0

- Updated React to version 18

## 1.48.0

- Step Indicator Paging with breaking changes, renamed props 'changeActiveStep' to 'arrowsAsCarousel', 'navigationCompletesPreviousSteps' to 'autocompletePreviousSteps', 'completeButtonId' to 'completeStepButtonId', 'previousButtonId' to 'previousStepButtonId', 'navigationClickable' to 'completeStepsClickable'

## 1.47.18

- Updated react to version 17

## 1.47.16

- Added a new accordion that supports multiple icons, and the ingress is hidden if accordion is open/expanded

## 1.46.12

- Added new version of shopping cart: ShoppingCartV2, SlidingShoppingCartV2
- Added two new kinds to Button: voca-normal, voca-inverted
- Fixed className prop for Paragraph
- Fixed active state for cart icon in Menu

## 1.46.00

- Added aria-labelledby as a required prop in Modal

## 1.45.17

- Undeprecated `ModalDialog` and made it look more like `Modal` component. `Modal` component does not work with SSR, so until that is fixed `ModalDialog` will still be in use.

## 1.45.15

- Released with github actions

## 1.45.0

- Added key as required prop for MobileNavBarMore items

## 1.44.0

- NEW colors (palette from VOCA)
- Recommended update if using the colors from SG: grey200 -> grey100

## 1.43.1

- NEW TeliaSans Font
- Update NPM ClassNames & Babel config

## 1.42.0

- StepFlow: use a fullscreen page layout component rather than a fullscreen modal.

## 1.41.21

- Added new component HardwareProductBox

## 1.41.10

- Added Breadcrumbs component
- Added inputRef to TextField component

## 1.41.0

- Updated Chip component
  - New size (32px for all), size prop is removed
  - Square chip is added
  - Kind prop is renamed to color
  - Change classnames to fit BEM pattern
- Updated TextField
  - Help text is left by default
- Updated PhoneNumberField
  - Change classnames to fit BEM battern
  - Added size prop

## 1.40.0

- Refactored StepByStep component - Written in typescript - `Step`, `Content` and `Descriptions` were perviously properties of the `StepByStep` class. These are now exported as components from
  index.ts and accessed from @telia/styleguide as `Step`, `StepContent` and `StepDescription`. - Enable customizing of icon, header and content in StepDescription - Add different sizes for a StepByStep component - Support dashed borders - Disable animations for non-interactive StepByStep components

## 1.39.7

- Added more colors to the [Color Palette](https://styleguide.channelapi.telia.no/?path=/docs/introduction-styleguide--color-palette)
  - [Commit 385fc2c](https://github.com/TeliaSoneraNorge/styleguide/pull/931/commits/385fc2c34d4660a96d1b9c83318283847a2cfb2e)

## 1.39.0

- Updated classes with the BEM-pattern in the following components
  - TextField
  - Avatar
  - business/Tooltip
  - business/Table
  - business/StepFlow
  - business/MainMenu
  - business/List
  - business/Card
  - business/Button

## 1.38.37

- Added FieldInstructions component

## 1.38.20

- Added Badge component

## 1.38.0

- Breaking: moved Toggle from business to atoms.
  To fix in your app replace `import {Toggle} from '@telia/styleguide/business'`
  with the usual `import {Toggle} from '@telia/styleguide'`
- Breaking: moved Checkbox from business to atoms.
  To fix in your app replace `import {Checkbox} from '@telia/styleguide/business'`
  with the usual `import {Checkbox} from '@telia/styleguide'`
- Deprecated old CheckBoxWithLabel components

## 1.37.2

- Added business StepFlow

## 1.37.0

- Breaking: moved TextField from business to molecules.
  To fix in your app replace `import {TextField} from '@telia/styleguide/business'`
  with the usual `import {TextField} from '@telia/styleguide'`
- Deprecated old TextBox components

## 1.36.0

- Breaking: renamed `label` props in business ListItem to `title`
- Added DatePicker
- Added PeriodPicker
- Added Incrementer
- Support expandable list items

## 1.35.0

- Breaking: Removed SideMenuHeader component. Use SideMenuItem instead
- A bunch og patches and minor improvements

## 1.34.21

Contains new components

- Lozenge
- Chip
- TextField (in busienss area)

## 1.34.8

- Added SubscriptionLinesAccordion component

## 1.34.0

- Rename icon "pen" to "edit"
- Rename icon "return" to "return-arrow"

## 1.33.73

- Added Avatar component
- Added new side menu
- Added navigation bar for mobile
- Adjustments to Toggle Button (business)
- Added support for only displaying focus style when user is tabbing (enableTabKeyDetetcion)

## 1.33.71

- Add new Button component in business part

## 1.33.66

- Removed component-lib directory, move everything to the root directory.

## 1.33.61

- Add new Modal component and deprecate old

## 1.33.51

- Changed from SvgIcon to Icon on Accordion

## 1.33.47

- Deprecate barColor prop in ProgressBar. Add color prop, typed by colors object.
- Add support for dropdown search (search input with dropdown menu, and dropdown with search input inside menu)
- Add support for nullish coalescing in component lib

## 1.33.45

- Support for typescript on AllIcons

## 1.33.42

- Added `onCartClick` and `numberOfItemsInCart` optional props to `Menu` to show cart icon with number of items in cart.

## 1.33.39

- Added declareations to d.ts files for better typescript support

## 1.33.38

- Added `SlidingShoppingCart` component.

## 1.33.36

- Added `ColorPicker` component.
- Added `SmallBoxList` component.
- Added `BigImageModal` component.
- Added `SubscriptionAccordion` component.
- Added `InfoCard` component.

## 1.33.33

- Dropdown Menu in the Menu component. A new feature that will advance when identity login are launched for all channels

## 1.33.24

- Changes to `Subscription`. Adding `extraDataAmount`, `extraDataUnit` props and always light gray teaser on expand.
- Change to `FunkyTabs`. Added support for no image on tabs.

## 1.33.22

- Storybook organizing sidebar
- Link table border bottom removed
- Link padding removal on links without icon

## 1.33.21

- New Icon: check-mark-circle

## 1.33.19

- Changes to `ShoppingCart`. Removing prop `additionalItems` and some style changes.

## 1.33.16

- Added `Table` to business components
- Added `Checkbox` to business components

## 1.33.15

- Added animation prop to `Accordion`.
- Added top level id to `Accordion` element.

## 1.33.14

- New Links & List

## 1.33.13

- New Button

## 1.33.10

- Added `hideIcon` prop to `Alert`.

## 1.33.9

- Change look of delete icon for `ShoppingCart`
- Change size of `QuantityPicker` for small devices.

## 1.33.2

- New Color Component, more info on home/color palette in storybook

## 1.33.1

- Added `Initial Expanded State` to `TableWithDropDown`

## 1.33.0

- Added `Button` kind `normal`, has no specific styling, same effect as not defining the button's `kind`
- In `ModalDialog`:
  - Remove `disableOverlayClick` and `disableCloseByEscKey` props. It's implicitly defined by `onClose` function.
  - Added `size` prop for the container size
  - Added `submitKind` and `closeKind` to overwrite the submit and close buttons kinds

## 1.31.3

- Added `title` attr and removed `block` styling for `Icon`.
- Updated `QuantityPicker`, `QuantityButton`, `StepIndicator`, `ShoppingCartItem`, `ShoppingCart` and `ShoppingCartAccordion` with new icons.

## 1.31.0

- Added new icons & <Icon /> component

## 1.30.18

- Added new LinkTable molecule.

## 1.30.18

- Modals: Border-radius from % to rem

## 1.30.17

- Modals: Ensure that overflow hidden is set on modal window

## 1.30.16

- RadioButtonGroup updated
- Fixed modal dialog focus to target the dialog itself to prevent scrolling to the bottom

## 1.30.15

- Modal dialog invoke effects only once and fix clickout

## 1.30.14

- Created stories for all Atoms
- tableWithDropDown component // Storybook /atoms/tableWithDropDown
- Sortable table hook

## 1.30.13

- ModalDialog: Added option to scroll if the modal content overflows the page.

## 1.30.12

- Added disableOverlayClick and disableCloseByEscKey props to ModalDialog component

## 1.30.11

- Added TableWithDropDown component

## 1.30.10

- Fixed Toggle components IE positioning bug
- New ThSortable component in FullWidthTable

## 1.30.9

- Hide ',-' for price in Subscription component for not rounded numbers (B2B customers)

## 1.30.8

- Fixed bug with showing nested buttons in `Subscription` component.

## 1.30.6

- Fixed bug in business icons (`arrow-small-*` and `more`)

## 1.30.2

- Added new business icons

## 1.30.1

- New molecule: RadioButtonGroup
- New atom: RadioButton
- Deprecated: RadioButtonList
- Deprecated: RadioButtonWithLabel

## 1.30.0

- TypeScript definitions (.d.ts) for all components. This can break existing build processes using TS.
- New business component: MainMenu
- Added download link for all business icons (.zip link in Storybook)

## 1.29.23

- Changes on Box component from article to button for accessibility

## 1.29.22

- Upgrade dependencies to mitigate security risks in `serialize-javascript`and `serialize-to-js` packages

## 1.29.19

- Non breaking tweaks to ShoppingCart and ShoppingCartAccordion
- Added AllIcons to all stories

## 1.29.18

- New molecule: ShoppingCart
- New organism: ShoppingCartAccordion

## 1.29.16

Added footer prop to Accordion

## 1.29.15

Added `<Icon />` to business components area

## 1.29.14

Subscription speechbubble font from italic to regular

## 1.29.13

Build and deploy storybook with web site

## 1.29.12

Switch from using Box to StatefulBox most likely, and update how the usage of Subscription.

- Separated Box into stateless and stateful
- Added scrollToOnOpen, second feature highlight, onSelect and onClose to Subscription
- Added jsx and knobs to storybook, and added story for Subscription.

## 1.29.11

    - SubscriptionPriceBox
    - SubscriptionPriceBoxes

## 1.29.10

- Alert (Added scrollTo and closeButtonText props)
- Accordion
- AccordionList
- Menu (Added onlyLogo prop)

## 1.29.9

- Focus trap is available for all and MobileMenu is focus trapped (accessibility improvement)

## 1.29.7

- Changed font-size of text in the Quote component

## 1.29.6

- Lint and Prettier fix
- Menu search: Shows spinner when loading and input field are disabled

## 1.29.3

- Menu & ModalDialog: IE compatibility fixes

## 1.29.2

- Allow modal dialog templating
- Menu accessibility: converted to buttons and added aria labels where needed.

## 1.29.1

- Fix missing Element in SSR problem for modals

## 1.29.0

- Modal dialog rewrite and accessibility improvements

## 1.28.60

- Create cjs version of AllIcons

## 1.28.52 and 1.28.53

- Colors: Darkest grey is changed, and all use of custom dark-grey-2 is removed.
- Svg icon files: Id is removed from all icons except pebbles. Title tag is removed.
- SvgIcon: add aria-hidden="true" if no title is provided
- TextBox: Should use TextBoxWithLabel and set `hideLabel` prop
- TextArea: Should use TextAreaWithLabel and set `hideLabel` prop
- Banner: Added image alt prop
- DisplayFunctonality: Breaking change; pass in both image and alt text
- Box: aria-label on close button
- PageMenu: Deleted examples
- Video: Added videoTitle prop
- Header: Added videoTitle prop

## 1.28.37 [new component]

- Molecules: TextBoxWithCharCount: input field with maximum number of characters

## 1.28.36

- onChange prop fixed in RadioButtonList

## 1.28.35

- Molecules: Gallery
- package "marked" updated
- CheckboxWithLabel has a disabled state
- Different layout for colors on the website
- Other minor tweaks

## 1.28.32

- DropDownListWithLabel: new Disabled option

## 1.28.23

- Button: new 'negative' kind

## 1.28.22

- FullWidthTable: Hover functionality with onClick event on rows

## 1.28.21

- Subscription: The subscription box is now more flexible with no hardcoded text

## 1.28.20

- Menu `z-index` fix

## 1.28.19 [new component]

- Molecules: Card

## 1.28.18

- Molecules: StatefulAccordionList: Removed scroll to active accordion

## 1.28.15 [new component]

- Atom: IconAnimated - has a dependency to the library [`lottie-web`](https://www.npmjs.com/package/lottie-web)

## 1.28.9

- New function and stle on Menu component

## 1.28.6

- Fixed accordians to work with and without buttons

## 1.28.2

- Small menu adjustments

## 1.27.0

- ES6 is no longer exposed in the component-lib - it is now vanilla JS, so works on all browsers.

## 1.26.1

- FocusBox: works better on small screens

## 1.26.0

- Large rewrite to remove dependencies, and get rid of (most of) the server

## 1.25.12

- StatsDisplay: molecule added

## 1.25.11

- Banner: molecule added

## 1.25.10

- RadioButtonList: onChange prop added
- Box: Add transparent option
- DisplayFunctionalityBlock: Added ability to choose device
- FeatureBox: Added ability to choose size and border of

## 1.25.9

- Changed styling on Quote component

## 1.25.8

- Fixed bug with ModalDialogOverlay not working on server rendered pages

## 1.25.7

- Make modifications to StepIndicator
- Add proper display for single elements in BoxGridBlocks

## 1.25.6

- Add DisplayFunctionality molecule

## 1.25.5

- TextBox className passed down
- Modal scroll fix

## 1.25.4

- Video with custom thumbnail and title

## 1.25.3

- TextBoxWithLabel bugfix when conditionally showing icon

## 1.25.2

- Add new options for BoxGrid component
- Removed pointer-events from AccordionList icon
- CSS tweaks to ToggleSwitch

## 1.25.1

- Expost MenuTopPanel

## 1.25.0

- TextBox components split up

## 1.24.1

- Header component has grey background by default

## 1.24.0

- Updated React version in the Node app
- Updated PostCSS versions

## 1.23.2

- InfoBox component
- Heading's can be centered
- Label styling adjustments

## 1.23.0

- Accordion: Plus/minus icons replaced with up/down arrows. No breaking changes to
  React component, but HTML structure changes, so non-React apps need to adjust their HTML.

## 1.22.4

- FeatureBoxes component

## 1.22.3

- Forgot to update AllIcons files

## 1.22.2

- Added two new icons ico_five and ico_six
- Add vertical list display option for USPs
- Add new checkmark icon for B2B page

## 1.22.1

- Style changes to LightAlert and Container

## 1.22.0

- FunkyTabs now only renders selected content (previously all other content was in DOM with display:none)
- Added and changed use of props for ToggleButton

## 1.21.7

- Small color change to icon for black version of Subscription Box

## 1.21.6

- Added new Data Freedom icon
- Updated black variant of Subscription Box

## 1.21.5

- Added new Music Freedom icon

## 1.21.4

- Added three new icons: ico_gift, ico_kr and ico_interest_free_down_payment. Also changed the ico_klikk-og-hent.

## 1.21.3

- Added black color option to Box/Subscription component
- Small change to FunkyTabs onSelect method

## 1.21.2

- Changes to style of StepIndicator
- Added withBorderBottom and backgroundColor props to Header
- Changes to style for FocusBoxWithLabels
- Added id prop to Form
- Fixed such that FocusBox shows border on mobile as well
- Added light-grey color to AnimatedProgressBar

## 1.21.1

- Updated README in component-lib folder
- Updated heroku build scripts

## 1.21.0

- Made custom classes appear last for Button component
- Form component can now take classNames
- PriceTable can now have array of subtitles per product. This is a major change to the proptypes of PriceTable
- StepIndicator changes
- Safari Fix for Speechbuble in Subscription component

## 1.20.0

- tree shakable components (this version has backward-compatibility, however,
  since there is not /dist folder anymore in the library, you should import index.css from styleguide root directory if you have this file in your codebase)

## 1.19.4

- Minor stuff

## 1.19.2

- Added hideMenu prop to PageHeader
- Minor style change for StepIndicator
- Added sr-only class global in component lib (screereader-only)

## 1.19.0

- Split AccordionList component into AccordionList and StatefulAccordionList where all the scrolling and toggling is inside the StatefulAccordionList and AccordionList is a pure component.

## 1.18.0

- Changed handling of menuLinks prop in PageMenu to expect a string of html in contentAboveItems instead of a React component

## 1.17.0

- Added RichText molecule
- Adjusted margins on several components
- Removed margin-bottom on `heading--level-2`

* (and therefore) added new `light-alert__heading` css class for LightAlert molecule
* (and) new `focus-subscription__heading` css class for FocusSubscription organism

- Updated some examples and sample pages with new classes and content

## 1.16.1

- HorizontalRule: Added prop to fix example that was wrong, and updated related components.

## 1.16.0

- NumberBoxes component removed

## 1.15.14

- B2B subscription box: Bugfix: text in bubble disappeared on hover

## 1.15.12

- FullWidthTable: Table rows are contained within container

## 1.15.11

- ProductPromoBox: center text in button

## 1.15.10

- ProductPromoBox: inlined button on desktop

## 1.15.9

- Bugfix for streched HardwareProducts in Firefox

## 1.15.8

- Added LightAlert molecule

## 1.15.7

- ProductListGrid has a horizontal layout option

## 1.15.6

- New icon ico_truck added

## 1.15.5

- ProductList data boost Safari fix

## 1.15.4

- Removed BelowTheLineOffer
- TextBoxWithLabel ref forwarding
- Button disabled prop fix
- Font name fix
- ProductList smallfixes
- Removed `heading--pebble` class
- - others

## 1.15.3

- Added trash icons & source icon cleanups

## 1.15.2

- Added klikk-og-hent & map icons
- ProductList items onClick

## 1.15.0

- Icon fixes
- ProductListGrid multi-column layout

## 1.14.3/1.14.4/1.14.5

- Added two svg icons

## 1.14.1/1.14.2

- Auto-generate the AllIcons.jsx component - no dependencies - and make it a part of the library.

## 1.14.0

- No static path for icons. Relies on an embedded SVG being present in the DOM.

## 1.13.2

- StepIndicator [changed]
- PromoBox [new]

## 1.13.1

- ProductList: new promo variant [changed]
- RelatedArticle: placeholder image [changed]
- ProductListGrid [new]
- Fixed all linting errors

## 1.13.0 [changed component]

- TextBoxWithLabel: Refactoring of component, adding props className and withIconButton. Old withIcon prop has now a different usecase, new name is withIconButton.
- AnimatedProgressBar: Bugfix in prop-types
- PageHeader: Always white BG
- PageMenu: Faster hamburger meny animation

## 1.12.1 [changed component]

- UniqueSellingPoints: adjusted width on items

## 1.12.0 [changed component]

- ProductPromoBox changes

## 1.11.10

- AnimatedProgressBar
- UniqueSellingPoints

## 1.11.9 [various]

- Organism: FocusBoxWithLabels
- PageHeader fixes
- StepIndicator fixes
- Hamburger menu animation
- PriceTable adjustments

## 1.11.4 [changed component]

- Molecule: PageMenu - modified to use searchUrl for link to search page or remove button if not defined

## 1.11.0 [changed component]

- Molecule: AccordionList - icons now done with CSS again

## 1.10.0 [new + changed components]

### Atoms:

- Box
- IconLink
- List with BubbleLinks
- SvgIcon
- UniqueSellingPoints

### Molecules:

- AccordionList
- Alert
- ArticleMetaData
- BelowTheLineOffer
- BoxGrid
- FactBox0
- Header
- PageHeader
- PageMenu
- PersonBox
- ProductList
- StepByStep
- Subscription
- TypeSearch

### Organisms:

- ContentRating
- Theme Boxes

## 1.9.7 [changed component]

- Molecule: PageHeader - added "Handlekurv" text to cart button and made styling-changes to the cart counter

## 1.9.6 [changed component]

- Molecule: TextBoxWithLabel - changed positioning of icon in input field

## 1.9.5 [changed component]

- Molecule: TextBoxWithLabel - added a modifier to have the possibility to add an icon in the input field

## 1.9.0 [changed component]

- Molecule: PageMenu (removed showButtons prop)
- Molecule: PageHeading - (removed textAboveLoginButton and showButtons prop in favour of templating; CSS change)

## 1.8.0 [new component]

- Molecule: MiniDashboard (previously UserDashboard)
- Molecule: UserDashboard - removed

## 1.7.10 [new component]

- Molecule: Subscription (broadband variant)
- Molecule: PriceTable

## 1.7.8 [new component]

- Organism: HardwareProductList

## 1.7.7 [new component]

- Molecule: HardwareProduct

## 1.7.6

- Add new icons

## 1.7.5

- Fix missing lodash import

## 1.7.4

- CommonJS/dist stuff
- Alerts are minimizable
- ToggleSwitch adjustments

## 1.7.2 [new + changed components]

- PageMenu
- PageHeading
  . ToggleSwitch

## 1.7.1 [new components]

### Atoms:

- Caption
- DescriptionList
- FullWidthTable
- HorizontalRule
- IconLink
- InputError
- List
- NumberBoxes
- PagePebbles
- Paragraph
- Quote
- ShadowBox
- SpecialMessage
- StepIndicator
- Tags
- TelephoneNumberLink
- TextArea
- UniqueSellingPoints

### Molecules:

- ArticleMetaData
- BoxGrid
- DownloadButtons
- FactBox
- FocusHeader
- FullWidthImage
- Header
- HeadingLink
- Hero
- Image
- ImageHeadingLink
- ListWithImage
- RelatedArticle
- StepByStep
- Video

## 1.7.0 [changed component]

- Tabs & FunkyTabs changes

## 1.6.0 [changed component]

- Molecule: Subscription

## 1.5.4 [new component]

- Organism: ThemeBoxesWithImage

## 1.5.1 [component library]

- Component library small fixes

## 1.5.0 [component library]

- Initial support for a component library (!)

## 1.4.0 [changed component]

- Organism: ThemeBoxes - removed/added css class

## 1.3.8 [new component]

- Molecule: Tooltip

## 1.3.5 [changed component + smallfixes]

- Molecule: ProductList
- Others: disabled button, radio focus styling, other minor changes

## 1.3.4 [new component]

- Organism: ThemeBoxes

## 1.3.3 [new component]

- Molecule: RecommendedProducts

## 1.3.2 [new component]

- Molecule: ProductList

## 1.3.0 [changed component]

- Organism: FocusSubscription - uses the new DescriptionList component

## 1.2.6 [new component]

- Atom: DescriptionList

## 1.2.5 [changed component]

- Atom: List - Changed margin-top on list

## 1.2.4 [extended component]

- Atom: List - Added option of having list with columns

## 1.2.3 [extended component]

- Molecule: DataBoostChart and DonutChart - added option for having the charts as a link

## 1.2.0 [changed component]

- Molecule: FactBox - removed horizontal line and borders

## 1.1.13 [extended component]

- Atom: Button - Added processing state

## 1.1.12 [extended components]

- Molecule: TextArea, TextAreaWithLabel and TextBoxWithLabel - Added disable state

## 1.1.11 [extended component]

- Organism: Form - Added fieldset as an element to form

## 1.1.10 [new component]

- Atom: AlertText

## 1.1.8 [new variant of component]

- Atom/Molecule: Subscription purple

## 1.1.6 [new component]

- Atom: InputError

## 1.1.4 [new component]

- Molecule: TextAreaWithLabel

## 1.1.3 [new variant of component]

- Atom: List--icon-text-links

## 1.1.2 [new component]

- Atom: TelephoneNumberLink

## 1.1.1 [new component]

- Atom: ShadowBox

## 1.1.0 [breaking changes]

- Molecule - StepByStep - New Pebble type and separated Circle type. Steps can now change between types with just a class change.
