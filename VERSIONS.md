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
