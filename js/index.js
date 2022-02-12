let data = {
  title: 'To Do List'
}

let vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    clickAdd: function () {
      if (document.querySelector('.enter').value.trim().length !== 0) {
        let matter = document.createElement('div')
        matter.classList.add('matter')
        matter.innerHTML =
          `<button class="status undone"><i class="fas fa-times"></i></button>
      <div class="content">` +
          document.querySelector('.enter').value +
          `</div>
          <button class="delete"><i class="far fa-trash-alt"></i></button>`
        document.querySelector('.list').appendChild(matter)
        document.querySelector('.enter').value = ''
      }
    }
  }
})
