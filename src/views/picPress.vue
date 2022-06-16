<template>
    <div id="app">
        <div class="buttonList flex">
            <input ref="input" type="file" @change="uploadF" multiple />
            <button @click="compress">压缩</button>
        </div>
        <!-- 压缩前图片 -->
        <div v-if="previewList.length > 0" class="preview flex" ref="preview">
            <img ref="preImg" v-for="(item, index) in previewList" class="new" :key="index" :src="item.src" />
        </div>
        <!-- 压缩后图片 -->
        <div v-if="finalList.length > 0" class="preview flex">
            <img ref="finalImg" v-for="(item, index) in finalList" class="new" :key="index" :src="item.src" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: '图片压缩',
            previewList: [],//渲染预览图片
            finalList: [],//压缩后图片
            maxW: 80,//最大宽
            maxH: 80,//最大高
        }
    },
    methods: {
        /**
         * 上传图片信息
         */
        uploadF(e) {

            const imgArr = e.target.files
            if (imgArr.length) {
                [].forEach.call(imgArr, this.readAndPreview);
            }
        },

        /**
         * 读取和预览图片
         */
        readAndPreview(file) {
            let vm = this
            console.log('file', file)
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener("load", function () {
                vm.previewList.push({ file: file, src: this.result });
            }, false);
            //true 是捕获  默认是false冒泡
        },

        /**
         * 压缩
         */
        compress() {
            if (this.previewList.length == 0) {
                alert("请选择图片")
                return
            }
            [].forEach.call(this.$refs.preImg, this.compressF);
        },
        /**
         * 压缩逻辑
         */
        compressF(img) {
            let vm = this
            let naturalWidth = img.naturalWidth
            let naturalHeight = img.naturalHeight
            let targetW = null
            let targetH = null
            // 判断图片是否需要压缩
            if (naturalWidth > this.maxW || naturalHeight > this.maxH) {
                let scale = naturalWidth / naturalHeight;
                if (scale > (this.maxW / this.maxH)) {
                    //Math 对象实例 round() 方法可把一个数字舍入为最接近的整数
                    // 更宽 按最大宽度 等比例设置尺寸
                    targetW = this.maxW
                    targetH = Math.round(this.maxH * (naturalHeight / naturalWidth))
                } else {
                    // 更高，按最大高度 等比例设置尺寸
                    targetH = this.maxH
                    targetW = Math.round(this.maxH * (naturalWidth / naturalHeight))
                }

            } else {
                alert('无需压缩')
                return false
            }

            let imgN = new Image()
            imgN.src = img['src'] // 图片的地址
            imgN['width'] = targetW
            imgN['height'] = targetH
            imgN.onload = function () {
                let canvas = document.createElement('canvas')
                canvas.width = targetW; /*设置新的图片的宽度*/
                canvas.height = targetH; /*设置新的图片的长度*/
                let ctx = canvas.getContext('2d')
                ctx.clearRect(0, 0, targetW, targetH)
                ctx.drawImage(this, 0, 0, targetW, targetH)
                let dataURL = canvas.toDataURL("image/png", 1);
                vm.finalList.push({ src: dataURL });
                vm.$nextTick(() => {
                    console.log(vm.$refs.finalImg)
                })

                // blob格式上传
                canvas.toBlob(blob => {
                    console.log(blob)
                    // 后台接口交互
                })

            }

        }

    }
}
</script>

<style lang="less" scoped>
@import "../main.less";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    .buttonList {
        display: flex;
        width: 690px;
        justify-content: space-between;
        margin: 30px auto;
        input {
            display: inline-block;
        }

        button {
            width: 100px;
        }
    }

    .preview {
        margin: 30px auto;
        width: 80%;
        background: lightgray;
        padding: 30px;
        flex-wrap: wrap;

        img {
            margin: 10px;
            width: 100px;
            
        }
    }
}
</style>
