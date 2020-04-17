const skillsModule = {
    state: {
        skills: [
            {id: 'skills',      value: '', content: '擅长技能',      checked: true},
            {id: 'familiarity', value: '', content: '技能熟练度(%)',  checked: true},
            {id: 'describe1',   value: '', content: '技能描述1',     checked: true},
            {id: 'describe2',   value: '', content: '技能描述2',     checked: false},
            {id: 'describe3',   value: '', content: '技能描述3',     checked: false},
        ],
        inputNotEmpty: null,
        skillsAdd: []
    },
    mutations: {
        skillsChange (state, obj) {
            state.skills[obj.index].value = obj.event;
        },

        // 点击清空输入框
        inputBtnEmpty (state) {
            state.skills.map( (items) => items.value = '')
        },

        // 点击添加技能证书的编写结果
        inputBtnAdd (state) {
            // 取出评分需要的数字
            let score = state.skills[1].value;
            if (score >= 100) {
                score = 5;
            }
            else if (score >= 80 && score < 100) {
                score = 4;
            }
            else if (score >= 60 && score < 80) {
                score = 3;
            }
            else if (score >= 40 && score < 60) {
                score = 2;
            }
            else if (score >= 1  && score < 40) {
                score = 1;
            }
            else if (score < 1) {
                score = 0;
            }
            // 输入框非空校验, 如果不为空则警告提示, 并且不能添加内容
            const itemValue = [];
            state.skills.map( (items) => {
                if (items.checked) {
                    if (items.value === '') {
                        state.inputNotEmpty = true;
                    } else {
                        itemValue.push(items.value);
                    }
                }
            })
            //  必填项输入内容后, 添加内容成功
            if (itemValue.length >= 3) {
                state.inputNotEmpty = false;

                state.skillsAdd.push({
                    id: Math.random(),
                    skills: state.skills[0].value,
                    familiarity: score,
                    describe1: state.skills[2].value,
                    describe2: state.skills[3].value,
                    describe3: state.skills[4].value,
                });
                // 添加内容成功后清空输入框
                state.skills.map( (items) => items.value = '')
            }

        }
    }
  }
  
  export default skillsModule;