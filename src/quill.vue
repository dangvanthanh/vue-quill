<template>
	<div class="quill">
		<div ref="quill" v-bind:value="value"></div>

	</div>
</template>

<script>
import Quill from 'quill'

export default {
  props: {
    value: ''
  },
  data () {
    return {
      editor: {}
    }
  },
  mounted () {
    let quillOptions = {
      placeholder: 'Compose an epic...',
      theme: 'snow'
    }

    this.editor = new Quill(this.$refs.quill, quillOptions)

    this.editor.on('text-change', (delta, source) => {
      this.$emit('text-change', this.editor, delta, source)
      console.log(JSON.stringify(this.editor.getContents()))
    })
  }
}
</script>

<style>
.quill {
	max-width: 60em;
	margin: 0 auto;
}

.quill-editor {
	height: 375px;
}
</style>
