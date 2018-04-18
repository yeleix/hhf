import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('item')
  },
  actions: {
    createItem (newItem) {
      // console.log('hi')
      this.get('store').createRecord('item', newItem)
      .save()
    }
  }
})
