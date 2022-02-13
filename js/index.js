let data = {
  title: 'To Do List',
  index: 0,
  input: {
    statu: 'undone',
    matterContent: ''
  },
  listContent: []
}

let vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    clickAdd: function () {
      if (this.input.matterContent.trim()) {
        let { statu, matterContent, index } = ''
        this.listContent.push({
          index: this.index,
          statu: this.input.statu,
          matterContent: this.input.matterContent
        })
        this.input.matterContent = ''
        this.index++
      }
    },
    clickContent: function (e) {
      e.target.parentNode.style.border = '1px solid red'
    },
    blurContent: function (e) {
      e.target.parentNode.style.border = 0
    },
    mouseoverContent: function (e) {
      if (e.target.scrollWidth > e.target.offsetWidth) {
        e.target.title = e.target.value
      }
    }
  }
})
