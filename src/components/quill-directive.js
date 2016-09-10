import Quill from 'quill'

export default {
  deep: true,
  params: ['content'],
  setup () {
    let self = this

    let quillOptions = {
      placeholder: 'Compose an epic...',
      theme: 'snow'
    }

    self.editor = new Quill(document.getElementById(self.el.id), quillOptions)
    self.editor.on('text-change', (delta, source) => {
      self.set(self.editor.getContents())
    })
  },
  bind () {
    this.vm.$nextTick(this.setup.bind(this))
  },
  update (value) {
  },
  unbind () {}
}
