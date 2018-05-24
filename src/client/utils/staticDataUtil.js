export function getStaticData(key) {
    const allData = window.__STATIC_DATA__;
    return key ? allData[key] : allData;
}