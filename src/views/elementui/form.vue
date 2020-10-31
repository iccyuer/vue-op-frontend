<template>
  <div>
    <h2>form 表单验证</h2>
    <!-- form -->
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name" style="text-align: left;">
        <!-- <el-input v-model="ruleForm.name" style="display: none;"></el-input> -->
        <span v-if="ruleForm.name">{{ ruleForm.name }}</span>
        <el-button type="primary" @click="dialogVisible = true">选择</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- dialog -->
    <el-dialog :visible.sync="dialogVisible" width="30%">
      <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
      },
      ruleForm: {
        name: ''
      },
      dialogVisible: false,
      treeData: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleNodeClick (data, node) {
      console.log(data, node)
      if (node.isLeaf) {
        this.ruleForm.name = data.label
        this.dialogVisible = false
        this.$refs['ruleForm'].validateField('name')
      }
    }
  }
}
</script>

<style>
</style>
