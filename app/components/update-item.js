import Component from '@ember/component'

export default Component.extend({
  // BEING ABLE TO EDIT FORMS // SAVE + CLOSE
  actions: {
    updateItem () {
      this.sendAction('update', this.get('item'))
    }
  }
})
