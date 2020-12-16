self.__BUILD_MANIFEST = {
  __rewrites: [],
  '/': ['static\u002Fchunks\u002Fpages\u002Findex.js'],
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/about': ['static\u002Fchunks\u002Fpages\u002Fabout.js'],
  '/frequently-asked-questions': [
    'static\u002Fchunks\u002Fpages\u002Ffrequently-asked-questions.js',
  ],
  sortedPages: [
    '\u002F',
    '\u002F_app',
    '\u002F_error',
    '\u002Fabout',
    '\u002Ffrequently-asked-questions',
  ],
}
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
