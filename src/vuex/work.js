const workModule = {
    state: {
      workList: [
        {id: 'name1',    value: '', content: '项目名称'},
        {id: 'project1', value: '', content: '项目经验'},
        {id: 'name2',    value: '', content: '项目名称2'},
        {id: 'project2', value: '', content: '项目经验2'},
        {id: 'name3',    value: '', content: '项目名称3'},
        {id: 'project3', value: '', content: '项目经验3'}
      ],
      workSelect: [
        {content: '工作经历1', checked: false},
        {content: '工作经历2', checked: false},
        {content: '工作经历3', checked: false},
        {content: '全部清空' , checked: true}
      ],
      workSelectValue: '',
      index1: 0,     // inputAction函数需要用到, 作用是根据数字指定输入框的内容值可变
      index2: 1,
      placeholder1: '项目名称', // 工作经历输入框一默认值
      placeholder2: '项目经验', // 工作经历输入框二默认值
    },
    mutations: {
        //  输入框里面默认显示的内容placeholder, 可变的索引index输入框的值可变时会用的
        workMenuSelect (state, argument) {
            if (argument === '工作经历1') {
                [state.index1, state.index2] = [0, 1];
                [state.placeholder1, state.placeholder2] = ['项目名称', '项目经验'];
            }
            if (argument === '工作经历2') {
                [state.index1, state.index2] = [2, 3];
                [state.placeholder1, state.placeholder2] = ['项目名称2', '项目经验2'];
            }
            if (argument === '工作经历3') {
                [state.index1, state.index2] = [4, 5];
                [state.placeholder1, state.placeholder2] = ['项目名称3', '项目经验3'];
            }
            if (argument === '全部清空') {
                state.workList.map( (item) => item.value = '');
            }
        },
        //  工作经历输入框的值可变
        inputChange (state, obj) {
            state.workList[obj.index].value = obj.event;
        }
    }
  }
  
  export default workModule;