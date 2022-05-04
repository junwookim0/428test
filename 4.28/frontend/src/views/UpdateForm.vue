<template>
    <div class="updateform">
        <h1>글을 수정하는 공간입니다</h1>
        
        <input type="text" v-model="memo.title"> <br>
        <textarea v-model="memo.memo" cols="30" rows="10"></textarea> <br>
        <button @click="update"> 전송 </button>
        
    </div>
</template>
    
<script>
    export default {
        data : function(){
            return{
                memo: '',
                title : ''
            }
        },
        created() { 
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response)=>{
            console.log(response.data)
            this.memo = response.data
            })
        },
        methods : {
        update : function(){
            this.$http.put('/api/memo/updateform',{
                data : {
                    memo : this.memo,
                    title : this.title
                }
            }).then( response => console.log(response.data))

            this.$router.push('/');
        }
    }
}
</script>
