# BGS Cards

Hello! If you are interested in contributing to the Rules Library for Buried Giant, you can do so in two ways:

If you have a card issue, or an issue with the website itself, please open up an Issue. Proposed errata, as well as proposed FAQs that rest on contested logic, should be always Issues.

If you have a fix to propose, please open up a Pull Request. All of the relevant data for cards contained in `content/card-data` for card text, `content/errata` for errata, `content/faq` for frequently asked questions. Here are some examples of good Pull Requests:
- An FAQ that has already been discussed and answered in an unambiguous way, either in the Github or by the community at large, but for some reason isn't in the Library.
- A clear issue in how the Library represents the reality of the product. (For example, a typo or other issue in the plaintext on the site that doesn't match the actual text on the card image.)
- Already-printed errata / card changes that are not reflected in the Library.

If you're interested in forking this code and using it yourself, you'll find what you need below.

## Requirements

- Node 18.15.0+

## Get Started

1. Clone this repository
1. `npm install`

## Useful Commands

- `npm run build` - build everything
- `npm run build:card-data` - build the card data only
- `npm run build:card-symbols` - move the card symbol icons
- `npm run build:card-images` - move the card images
- `npm run build:i18n` - build the i18n files and ensure that they're formatted correctly
- `npm run validate` - validate everything
- `npm run validate:card-data` - validate the card data is formatted correctly

## Adding New Content

### Products

1. Create a new file matching the game name in `content/meta-data` (subproduct ids must be different from the game id and unique)
1. Create a new folder in `content/card-data` (the name should match the `gameName` in the `meta-data` file)
1. Create a new folder in `content/card-images` (the name should match the `gameName` in the `meta-data` file)
1. Create a new folder in `content/card-symbols` (the name should match the `gameName` in the `meta-data` file)
1. Add the product name the product list in `content/i18n` (the name should match the `gameName` in the `meta-data` file)
1. Add a new 512x512 PNG in `content/card-symbols/products` (the name should match the `gameName` in the `meta-data` file)
1. Follow the steps below for adding new locales and filters.

### Locale

1. Create a new folder in `content/card-data/{game}` for the locale (probably `en-US`)
   1. Add a `{game}.yml` file here (or, as many separate files as desired - they all get concatenated together) and fill it with card data.
1. Create a new folder in `content/card-images/{game}` for the locale (probably `en-US`)
   1. Fill this folder with the images for the cards for the game.

### Adding New Filters

When adding new filters in a meta data file that previously did not exist, you must also:

1. Navigate to each locale file (in the `i18n` folder)
1. Go to `Pages.AdvancedSearch`
1. Add a similar entry as seen there for your new filter.

## Publishing New Content

This is done automatically when a PR is merged to `master`, and isn't intended to be done manually.
