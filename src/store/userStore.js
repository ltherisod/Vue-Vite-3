import {defineStore} from 'pinia';
import axios from 'axios'

export const useUserStore = defineStore("userStore",{
    //state
    state:()=>{
        return{
           users:[],
           user:null
        }
    },
    //getters
    getters:{
        getUsersData(state){
            return state.users;
          },
          getUserData(state){
            return state.user
          }
    },
    //actions
    actions:{
        getUsers: async function(){
            try{
                const res = await axios("https://639f2d1e5eb8889197f64888.mockapi.io/forms");
                const result=res.data
                this.users=result;
            }catch(error){
                console.log(error)
            }
          },
          postUsers : async function(user){
           try{
            const res = await  axios.post("https://639f2d1e5eb8889197f64888.mockapi.io/forms",{...user})
            console.log(res.data)
            this.users.push(user)
           }catch(error){
            console.log(error)
           }
          }
    }
})