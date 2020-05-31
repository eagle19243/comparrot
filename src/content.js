const extensionOrigin = `chrome-extension://${chrome.runtime.id}`;

const iframeID = 'extension-iframe';
const activeClassName = 'active';
const inactiveClassName = 'inactive';
const inClassName = 'in';
const expandedClassName = 'expanded';
const remove = 'remove';
const add = 'add';

const getIframe = () => document.getElementById(iframeID);

const toggleShowIframe = () => {
  const iframe = getIframe();
  const isActive = iframe.classList.contains(activeClassName);

  const toggleActiveClass = isActive ? remove : add;
  const toggleInactiveClass = isActive ? add : remove;
  iframe.classList[toggleActiveClass](activeClassName);
  iframe.classList[toggleActiveClass](inClassName);
  iframe.classList[toggleInactiveClass](inactiveClassName);
};

const hideIframe = () => {
  const iframe = getIframe();

  iframe.classList.remove(activeClassName);
  iframe.classList.remove(inClassName);
  iframe.classList.add(inactiveClassName);
};

const toggleExpandIframeWidth = isOpen => {
  const iframe = getIframe();

  const toggleExpandedClass = isOpen ? add : remove;

  iframe.classList[toggleExpandedClass](expandedClassName);
};

const tryToScrapeDataByVendor = vendor => {
  const AMAZON = 'amazon';
  const isAmazon = vendor.includes(AMAZON);

  if (isAmazon) {
    const productTitleElement = document.getElementById('productTitle');
    const productPriceElement = document.getElementById('priceblock_ourprice');

    const shouldSendProductToDB = !!productTitleElement;

    if (shouldSendProductToDB) {
      const title = productTitleElement.innerText;
      const price = productPriceElement.innerText;
      const url = location.href;
      const vendor = AMAZON;

      const product = {
        title,
        price,
        url,
        vendor,
      };
      sendProductToDB(product);
    }
  }
};

const sendProductToDB = product => {
  chrome.runtime.sendMessage({
    action: 'send-product-to-db',
    product,
  });
};

if (!location.ancestorOrigins.contains(extensionOrigin)) {
  const iframe = document.createElement('iframe');
  iframe.id = iframeID;
  // Must be declared at web_accessible_resources in manifest.json
  iframe.src = chrome.runtime.getURL('index.html');
  document.body.appendChild(iframe);
}

chrome.extension.onMessage.addListener(function(msg) {
  switch (msg.action) {
    case 'toggle-show-iframe':
      toggleShowIframe();
      break;

    case 'hide-iframe':
      hideIframe();
      break;

    case 'toggle-expand-iframe-width':
      toggleExpandIframeWidth(msg.isOpen);
      break;

    case 'try-to-scrape-data':
      tryToScrapeDataByVendor(location.hostname);
      break;

    default:
      break;
  }
});

document.body.addEventListener('click', hideIframe);

