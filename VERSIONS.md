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

Only noteworthy versions shown (minor changes are omitted).

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
