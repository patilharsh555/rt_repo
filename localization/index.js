const enTranslatedMessages = require('./en-US.json');
const hiTranslatedMessages = require('./hi-IN.json');

// The following line imports all the json inside of current folder
// This is required to process the component wise i18n jsons
(() => {
  require.context('.', true, /.json$/);
})();

module.exports = {
  en: enTranslatedMessages,
  hi: hiTranslatedMessages,
};
