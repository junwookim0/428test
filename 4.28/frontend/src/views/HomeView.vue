<template>
  <div class="home">
      <h1>메모</h1>
      <table v-for="(memo, i) in memo" :key="i">
        <tr>
          <td> 아이디 </td>
          <td> 작성자 </td>
          <td> 제목 </td>
        </tr>
        <tr>
          <td>{{memo.id}}</td>
          <td>{{memo.writer}}</td>
          <td @click="$router.push(`/${memo.id}`)">{{memo.title}}</td>
          <!-- 
            수정버튼 클릭시 : UpdateForm
            삭제버튼 클릭시 : 삭제할 메모 id 값을 통해 삭제
          -->
          <td><button @click="$router.push(`/updateform/${memo.id}`)">수정</button></td>
          <td><button @click="deletememo(memo.id)">삭제</button></td>
        </tr>
      </table>
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  created() { 
    this.$http.get('/api/memo')
    .then((response)=>{
      console.log(response.data)
      this.memo = response.data
    })
  },
  data() {
    return {
      memo :[]
    }
  },
  methods :{
    deletememo(id) {
      //axios를 xhdog id값을 가진 memo를 삭제
      this.$http.delete(`/api/memo/${id}`)
      .then((response)=> {
        //값이 삭제된 메모배열을 다시 할당
        this.memo = response.data
      });
      //alert("삭제되었습니다");
    }
  }
}
</script>
