
<template>
    <div class="offset-3 col-6"> 
        <table class="table">
<thead>
<tr>
<th scope="col">Full Name</th>
<th scope="col">Date of Incorporation</th>
<th scope="col">Email</th>
<th scope="col">Password</th>
<th scope="col">Edit</th>
</tr>
</thead>
<tbody>
<tr v-for="user in userRecords" :key="user.email">
<th>{{user.fullName}}</th>
<td>{{user.dateOfIncorporation}}</td>
<td>{{user.email}}</td>
<td>{{user.password}}</td>
<td><button type="button" class="btn btn-outline-primary">Edit</button></td>
</tr>
</tbody>
</table>

    </div>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class'
const user = namespace('User')
@Component({
  components: {
  },
})
export default class UserDashboard extends Vue {
userRecords:Array<any> = [] 
title = 'UserDahbboard'
@user.Getter
  public getAllUsers!: Array<any>
  created():void {
      this.userRecords = this.getAllUsers
      console.log(this.userRecords);
 }
}

</script>

<style>