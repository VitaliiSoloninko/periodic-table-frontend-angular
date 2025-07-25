const BASE_URL =
  'https://periodic-table-backend-nestjs-postgresql-production.up.railway.app/';

export const ELEMENTS_URL = BASE_URL + 'elements';
export const ELEMENT_SEARCH_URL = BASE_URL + 'elements-search';
export const ELEMENTS_BY_NAME_URL = ELEMENT_SEARCH_URL + '/name';
export const ELEMENTS_BY_SYMBOL_URL = ELEMENT_SEARCH_URL + '/symbol';
