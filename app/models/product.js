import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr(),
    color: DS.attr(),
    supplier: DS.attr(),
    pricecategory: DS.attr(),
    price: DS.attr(),
    image: DS.attr(),
    description: DS.attr()
  });