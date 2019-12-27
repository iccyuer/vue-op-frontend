<template>
  <div>
    <h2>upload上传组件</h2>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :before-upload="beforeUpload"
      :before-remove="beforeRemove"
      :on-success="uploadFile"
      :file-list="form.attachments">
      <el-button size="small" style="color:#FF5000"> 上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        attachments: []
      }
    }
  },
  methods: {
    // 文件上传之前
    beforeUpload (file) {
      var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
      const extension = testmsg === 'doc'
      const extension2 = testmsg === 'docx'
      if (!extension && !extension2) {
        this.$message({
          message: '上传文件只能是doc、docx!',
          type: 'warning'
        })
      }
      if (file.name && file.name.length > 50) {
        this.$message({
          message: '上传文件名称不能超过 50个字符!',
          type: 'warning'
        })
      }
      const isLt2M = file.size / 1024 / 1024 < 10
      if (!isLt2M) {
        this.$message({
          message: '上传文件大小不能超过 10MB!',
          type: 'warning'
        })
        // return false
      }
      return (extension || extension2) && isLt2M
    },
    uploadFile (response, file, fileList) {
      console.log('9999999999999999999999', response)
      console.log('88888888888888888', file)
      console.log(fileList.response)
      this.form.attachments.push({ name: file.name, id: response.id + Math.random() })
      // fileList.response.data.forEach((item, index) => {
      //   this.form.attachments.push({ name: item.fileName, url: item.downloadUrl })
      // })
      // this.form.attachments = this.form.attachments.filter((a) => !res.has(a.name) && res.set(a.name, 1))
      console.log('000000000000000', this.form.attachments)
    },
    // 移除
    beforeRemove (file, fileList) {
      console.log(fileList)
      console.log(file)
      // if (file && file.status === 'success') {
      //   console.log(this.form.attachments.indexOf(file))
      //   this.$confirm(`确定移除 ${file.name}？`)
      //   this.form.attachments.splice(this.form.attachments.indexOf(file), 1)
      //   console.log(this.form.attachments)
      //   return
      return this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(this.form.attachments.indexOf(file))
        // 删除的时候把attachments里面的对象删掉
        this.form.attachments.splice(this.form.attachments.indexOf(file), 1)
        // this.$set(this.form, 'attachments', this.form.attachments.splice(this.form.attachments.indexOf(file), 1))
        // this.form.attachments.pop()
        console.log('delete', this.form.attachments)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        console.log('delete', this.form.attachments)
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
      // } else {
      //   return false
      // }
    }
  }
}
</script>

<style>

</style>
