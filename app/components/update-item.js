import Component from '@ember/component'

export default Component.extend({
  // newItem: {
  //   content: '',
  //   date: ''
  // },

  actions: {
    updateItem () {
      console.log(this.get('item'))
      this.sendAction('update', this.get('item')) // example = data because {{#each model as |example|}} (??)
    }
  }
})
