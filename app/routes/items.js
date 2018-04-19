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
    },
    deleteItem (item) {
      // console.log(item)
      item.destroyRecord()
        // .then(() => this.transitionTo('items'))
    },
    saveItem (item) {
      console.log('item is ', item)
      item.save()
    }
  }
})
