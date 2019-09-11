<template>
  <div>
    <h2>使用element-upload</h2>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      accept="image/*"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  mounted () {
    // capture="camera"  只接受相机，el-upload不接收这个props，只能通过渲染过后再添加这个属性
    document.getElementsByClassName('upload-demo')[0]
      .getElementsByTagName('input')[0].setAttribute('capture', 'camera')
  }
}
</script>

<style>

</style>
