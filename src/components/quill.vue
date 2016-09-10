<template>
	<div class="quill">
		<div id="quill-editor" class="quill-editor" v-quilleditor></div>
	</div>
</template>

<script>
import Quilleditor from './quill-directive'

export default {
	directives: { Quilleditor },
  data () {
    return {
    }
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
