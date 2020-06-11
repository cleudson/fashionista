import { toLower, replace } from 'ramda';

const FormatUrl = (url) => {
    const lowerCase = toLower(url);
    const noSpaces = replace(/\s/g, '-', lowerCase);
    return noSpaces;
}
export default FormatUrl;