<template>
  <div>
    <h4>水印上传</h4>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :before-upload="beforeUpload">
      <i class="el-icon-plus"></i>
    </el-upload>
    <hr/>
    <h4></h4>
  </div>
</template>

<script>
import { testUpload } from '@/api/upload'
export default {
  methods: {
    uploadMulter () {

    },
    beforeUpload (file) {
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2
      // ----
      // File --> blob
      let imageUrl = URL.createObjectURL(file)
      console.log('imageUrl', imageUrl)
      console.log('file', file)
      let image = new Image()
      image.src = imageUrl
      image.onload = () => {
        let imgWidth = image.width
        let imgHeight = image.height
        let canvas = document.createElement('canvas')
        canvas.width = imgWidth
        canvas.height = imgHeight
        let ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0, imgWidth, imgHeight) // (img,x,y,w,h)
        ctx.textBaseline = 'hanging'
        ctx.font = "bold 10px 'Microsoft YaHei','宋体'"
        ctx.fillStyle = 'orange'
        // ctx.fillText(new Date(), 5, 5);
        this.canvasTextAutoLine(new Date().toString(), canvas, 5, 5, 10)
        let canvasImage = canvas.toDataURL('image/jpeg', 0.9)
        // console.log('canvasImage', canvasImage)
        let fileImage = this.dataURLtoFile(canvasImage, file.name)
        // console.log('fileImage', fileImage)

        const formData = new FormData()
        formData.append('file', fileImage)
        testUpload(formData)

        // document.body.appendChild(canvas)
      }
      this.imgSrc = imageUrl
      return false
      // ----

      // let reader = new FileReader()
      // reader.readAsDataURL(file)
      // reader.onload = e => {
      //   // console.log('e', e.target.result)
      //   // var canvas = new Canvas()
      //   // canvas.width = '30px'
      //   // canvas.height = '30px'
      //   // var ctx = canvas.getContext("2d")
      //   // ctx.drawImage(e, 0, 0, 300, 200);//(img,x,y,w,h)
      //   // body.apendChild(canvas)
      // }

      // if (!isJPG) {
      //   this.$message.error("上传头像图片只能是 JPG 格式!")
      // }
      // if (!isLt2M) {
      //   this.$message.error("上传头像图片大小不能超过 2MB!")
      // }
      // return isJPG && isLt2M
    },
    // base64-->File
    dataURLtoFile (dataurl, filename) {
      let arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },
    /**
     * canvas文字折行
     * str:要绘制的字符串
     * canvas:canvas对象
     * initX:绘制字符串起始x坐标
     * initY:绘制字符串起始y坐标
     * lineHeight:字行高
     */
    canvasTextAutoLine (str, canvas, initX, initY, lineHeight) {
      var ctx = canvas.getContext('2d')
      ctx.textBaseline = 'hanging'
      ctx.font = "bold 10px 'Microsoft YaHei','宋体'"
      ctx.fillStyle = 'orange'
      var lineWidth = 0
      var canvasWidth = canvas.width
      var lastSubStrIndex = 0
      for (let i = 0; i < str.length; i++) {
        lineWidth += ctx.measureText(str[i]).width
        if (lineWidth > (canvasWidth / 8) * 5) {
          ctx.fillText(str.substring(lastSubStrIndex, i), initX, initY)
          initY += lineHeight
          lineWidth = 0
          lastSubStrIndex = i
        }
        if (i === str.length - 1) {
          ctx.fillText(str.substring(lastSubStrIndex, i + 1), initX, initY)
        }
      }
    }
  }
}
</script>

<style>

</style>
