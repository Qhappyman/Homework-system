import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(axios)
export default()=>{
return new Vuex.Store({
    state:{
        role:"2",
        teach:{
            name:"郭俊清",
            profession:"信管",
            ID:"2018210842",
        },
        checkList:["前端"],
        courseList:[{name:'前端',code:'123'},{name:'后端',code:'456'},{name:'安卓',code:'789'}],
        workList:[{title:'作业一',content:'做一个登录网站'},{title:'作业二',content:'做一个注册网站'}],
        noticeList:[{title:'公告一',content:'做一个公鸡网站'},{title:'公告二',content:'做一个公告网站'}],
        stuHomeworkList: [{title:'作业一', content:'做一个登录网站', deadline:'10月1日'}, {title:'作业二',content:'做一个注册网站', deadline:'10月1日'}],
        stuNoticeList:[{title:'公告一',content:'做一个登录网站',time:'10月2日'},{title:'公告二',content:'做一个注册网站',time:'10月2日'}]
    },
    mutations:{
        update(state,paload){
            state[paload.name] = paload.data; //更新teach
            // state[paload.list] = paload.listdata //更新checklist
            state[paload.role] = paload.roledata
            state[paload.checklist] = paload.listdata;
        },
        updateWorklist(state,message){
            state.workList.push(message.name);
        },
        updateNoticelist(state,message){
            state.noticeList.push(message.name);
        },
        updateChecklist(state,course){
            state.checkList.push(course);
        },
        deleteClass(state,name){
            let index;
            state.checkList.forEach((item,ind)=>{
                if(item == name){
                    index=ind;
                }
            });
            state.checkList.splice(index,1);
        }
        // updateName(state,namw){
        //     state.teach.name=name;
        // },
        // updateID(state,ID){
        //     state.teach.ID=ID;
        // },
        // updateProfession(state,profession){
        //     state.teach.profession=profession;
        // }
    },
    getters:{
        getUserDetails: state => {
          return state.teach;
        },
        getChecklist: state => {
          return state.checkList;
        },
        getCourseList: state => {
          return state.courseList;
        },
        getRole:state=>{
          return state.role;
        },
        getWorklist: state => {
          return state.workList;
        },
        getNoticelist: state => {
          return state.noticeList;
        },
        getStuHomeworkList(state,response){
          state.stuHomeworkList = reponse
          return state.stuHomeworkList;
        },
        getStuNoticeList: state => {
          return state.stuNoticeList;
        }
    },
    actions: {
      stuHomeworkList(context) {
        axios.post()
          .then((response)=>{
            context.commit('getStuHomeworkList',response)
          })
          .catch((error)=>{
            console.log(error)
          })
      }
    }
})
}
