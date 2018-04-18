import Component from '@ember/component'

export default Component.extend({
  actions: {
    delete () {
      // console.log(this.get('item'))
      if(confirm('You are about to remove this item. Are you sure?'))
        this.sendAction('delete', this.get('item'))
    }
  }
})
