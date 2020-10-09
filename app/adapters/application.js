import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = "http://localhost/back-end";
  namespace = "/api/v1";
}