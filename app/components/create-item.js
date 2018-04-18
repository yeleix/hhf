import Component from '@ember/component'

export default Component.extend({
  newItem: {
    content: '',
    date: ''
  },
  actions: {
    createItem () {
      this.sendAction('create', this.get('newItem'))
      this.set('newItem.content', '') // get rid of text field
    }
  }
})
