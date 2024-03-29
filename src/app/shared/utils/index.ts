declare const chrome: any;

export const getSeletedTab = async (): Promise<any> => {
  return new Promise(resolve => {
    chrome.tabs.getSelected(null, (tab: any) => {
      resolve(tab);
    });
  });
};

export const getNumberFromString = (price = ''): number => {
  const regex = /([0-9]*[.])?[0-9]+/g;
  const m = regex.exec(price.replace(',', ''));
  return m ? Number(m[0]) : 0;
};

export const getXPathString = (doc: Document, xpath: string) => {
  if (!xpath) return '';
  xpath = `normalize-space(${xpath})`;
  const result = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
  return clean(result.stringValue);
};

export const getXPathArray = (doc: Document, xpath: string): any => {
  if (xpath === undefined || xpath === '') return [];
  const result = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
  return result;
};

export const getXPathContent = (doc: Document, xpath: any): string => {
  if (xpath === undefined || xpath.length === 0) return '';

  const xpaths = Array.isArray(xpath) ? xpath : [xpath];
  for (let xpath of xpaths) {
    xpath = 'normalize-space(' + xpath + ')';
    const result = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
    const value = clean(result.stringValue);

    if (value !== '') {
      return value;
    }
  }

  return '';
};

/**
 * Trip spaces and remove html entities
 * @param {string} str
 */
export const clean = (str: string): string => {
  return str
    ? str
        .replace(/&nbsp;/g, '')
        .replace(/&amp;/g, '')
        .replace(/^\s+|\s+$/g, '')
    : '';
};

export const extractGUrl = (url: string): string => {
  const vars = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
    return value;
  });

  return vars['adurl'] ? vars['adurl'] : url;
};

export const validURL = (url: string) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(url);
};

export const formatUPC = ( str: string) => {
  if (str === '' || !Number(str)) {
    return str;
  }

  const width = 14 - str.length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test(str) ? 2 : 1) ).join( '0' ) + str;
  }
  return str;
}