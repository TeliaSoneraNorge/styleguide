/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');

const iconsPath = path.join(__dirname, '../../assets/icons');

/**
 *
 * Initialize SVGO for generating clean SVGs.
 *
 */
const svgo = new SVGO({
  plugins: [
    { cleanupAttrs: true },
    { removeAttrs: { attrs: '(stroke|fill)' } },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: false },
    { cleanUpEnableBackground: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: false },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { transformsWithOnePath: false },
    { removeDimensions: true },
  ],
});

async function processIcons() {
  /**
   *
   * First step, process each individual SVG file
   *
   */
  const icons = [];
  const iconFiles = fs.readdirSync(iconsPath).filter(f => f[0] !== '.');
  let result = { processed: [], errors: [] };
  for (const i in iconFiles) {
    const iconFileName = iconFiles[i];
    try {
      if (!iconFileName.match(/\.svg$/)) {
        throw new Error(`Only *.svg files allowed`);
      }
      const iconFileData = fs.readFileSync(path.resolve(iconsPath, iconFileName));
      let svg;
      try {
        svg = await svgo.optimize(iconFileData, { path: iconFileName });
      } catch (error) {
        throw new Error(`Cannot process SVG content`);
      }
      if (!svg || !svg.data || svg.data.length === 0) {
        throw new Error(`No SVG content`);
      }

      const iconName = iconFileName.slice(0, -4);

      icons.push({
        icon: iconName,
        filename: iconFileName,
        singleComponentName:
          iconFileName.replace(/(^([a-z])|-([a-z]))/g, (a, b, g2, g3) => (g2 || g3).toUpperCase()).slice(0, -4) +
          'Icon',
        svg: svg.data,
        innerJsx: svg.data
          .replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">', '')
          .replace('fill-rule', 'fillRule')
          .replace('</svg>', ''),
        outerJsxWithClassNameAndStyle: svg.data
          .replace(
            '<svg ',
            `<svg className={cs('Icon', 'Icon--${iconName}', props.className)} style={props.style} aria-hidden={props.title ? undefined : true} `
          )
          .replace('>', '>{props.title && <title>{props.title}</title>}')
          .replace('fill-rule', 'fillRule'),
      });
      result.processed.push(iconFileName);
    } catch (error) {
      result.errors.push(`${iconFileName}: ${error.message}`);
    }
  }

  if (result.errors.length > 0) {
    process.exit(1);
  }

  return icons;
}

module.exports = processIcons; /* eslint-disable no-console */
