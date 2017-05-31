export function extractComponentNameFromPath(path) {
    const pathParts = path.split('/');
    const componentFileName = pathParts[pathParts.length - 1];
    return componentFileName.split('.')[0];
}