
Component({
  properties: {
    
  },
  data: {
    confirm:null
  },
  methods: {
    cancle(){
      this.setData({
        confirm: false
      })
      this.triggerEvent('clickcancle',this.data.confirm)
    },
    confirm() {
      this.triggerEvent('clickconfirm', this.data.confirm)
    }

  }
})
