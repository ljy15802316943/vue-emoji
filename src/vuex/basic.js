const basic = {
    state: {
      basicList: [
        {id: 1, name: '姓名',    value: '', state: true},
        {id: 2, name: '求职岗位', value: '', state: true},
        {id: 3, name: '个人介绍', value: '', state: true},
        {id: 4, name: '个人介绍2(可选)', value: '', state: false},
        {id: 5, name: '个人介绍3(可选)', value: '', state: false},
        {id: 6, name: '联系方式', value: '', state: true},
        {id: 7, name: 'email',   value: '', state: true},
        {id: 8, name: '擅长/爱好(可选)', value: '', state: false},
        {id: 9, name: '博客(可选)',    value: '', state: false},
        {id: 10, name: 'github(可选)',  value: '', state: false},
        {id: 11, name: 'Fackboox(可选)', value: '', state: false},
        {id: 12, name: 'Weibo(可选)', value: '', state: false}
      ],
      index: ''
    },
    mutations: {
      increment (state, obj) {
        // basicformation 组件传过来的, index, event.
        state.basicList[obj.index].value = obj.event;
      }
    }
  }
  
  export default basic;