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
      .then(() => {
        this.get('flashMessages')
          .success('item was created!')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Try again.')
      })
    },
    deleteItem (item) {
      // console.log(item)
      item.destroyRecord()
        // .then(() => this.transitionTo('items'))
        .then(() => {
          this.get('flashMessages')
            .success('item was deleted!')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Try again.')
        })
    },
    saveItem (item) {
      // console.log('item is ', item)
      item.save()
      .then(() => {
        this.get('flashMessages')
          .success('item was updated!')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Try again.')
      })
    }
  }
})
