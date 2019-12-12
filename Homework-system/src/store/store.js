import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(axios)
export default()=>{
return new Vuex.Store({
    state:{
        teach:{
            name:"郭俊清",
            profession:"信管",
            ID:"2018210842",            
            ID:"2018210842",
        },
        entercourse:'',
        userInfo:'',  //{userid:  ,role:}
        stuworkList:[],
        checkList:'',  //教师所教课程
        stuWorklist:'',   //missionId下面已交的学生作业
        workList:'',   //老师布置的作业列表
        noticeList:'',
        courseList:[{name:'前端',code:'123'},{name:'后端',code:'456'},{name:'安卓',code:'789'}],
        stuHomeworkList: [{title:'作业一', content:'做一个登录网站', deadline:'10月1日'}, {title:'作业二',content:'做一个注册网站', deadline:'10月1日'}],
        stuNoticeList:[{title:'公告一',content:'做一个登录网站',time:'10月2日'},{title:'公告二',content:'做一个注册网站',time:'10月2日'}]
    },
    mutations:{
        saveInfo(state,mes){
          state.userInfo = mes;
        },
        update(state,paload){
            state[paload.name] = paload.data; //更新teach
            // state[paload.list] = paload.listdata //更新checklist
            // state[paload.role] = paload.roledata
            state[paload.checklist] = paload.listdata;
        },
        updateWorklist(state,message){
            state.workList=message;
        },
        addWorklist(state,message){
            state.workList.push(message);
        },
        updateWork(state,message){
            state.workList.forEach((item)=>{
                if(item.id==message.id){
                    item.context=message.context;
                }
            })
        },
        deleteWorklist(state,id){
            let deleteIndex;
            state.workList.forEach((item,index)=>{
                if(item.id == id){
                    deleteIndex = index;
                }
            })
            state.workList.splice(deleteIndex,1);
        },
        updateNoticelist(state,message){
            state.noticeList = message;
        },
        updateChecklist(state,course){
            state.checkList.push(course);
        },
        updateStuworklist(state,payload){
            state.stuWorklist = payload;  //教师获取missionId下面的学生作业
        },
        enterCourse(state,mes){
          state.entercourse=mes;
        },
        deleteClass(state,name){
            let index;
            state.checkList.forEach((item,ind)=>{
                if(item == name){
                    index=ind;
                }
            });
            state.checkList.splice(index,1);
        },
        getCourse:(state,message)=>{
            state.checkList = message;
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
    },
    actions:{
       
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
