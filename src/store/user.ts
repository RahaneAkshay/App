/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { VuexModule, Module, Mutation, Action,getModule } from 'vuex-module-decorators'
import {data} from '../utility/data'
@Module({ namespaced: true, name: 'user', })
class User extends VuexModule {
  public users:Array<any> = data
  @Mutation
  public setUser(newUser:any): void {
    this.users.push(newUser)
  }
  @Action
  public addUser(newUser: any): void {
    this.context.commit('setUser', newUser)
  }
  get getAllUsers(){
      return this.users
  }
}

export default User
//export const userStore = getModule(User);