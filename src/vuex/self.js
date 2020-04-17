const selfModule = {
    state: {
      selfList: [{id: 'assessment', value: '', content: '自我评价'}]
    },
    mutations: {
      selfChange (state, event) {
        state.selfList[0].value = event;
      }
    }
}
  
export default selfModule;