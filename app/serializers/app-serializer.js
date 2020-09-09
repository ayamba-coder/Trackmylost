import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class AppSerializerSerializer extends JSONAPISerializer {
    host = "http://localhost/back-end/"
}
