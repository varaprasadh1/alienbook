<template>
    <div class="ref-original-post">
        <div class="ref-post-meta">
            <div class="author-img">
                <Avatar :src="post.profile_pic_url" size="40"/>
            </div>
            <div class="info">
                <div class="author-name">{{post.authorName || this.refAuthorName}}</div>
                <div class="pub-date" v-if="post.createdAt!=undefined" >{{new Date(post.createdAt).toLocaleDateString()}}</div>
            </div>
        </div>
        <div class="ref-post-content">
             <PostTextContent v-if="post.content" :content="post.content"/>
             <div class="content-fallback" v-else>this post not available</div>
             <PostImages v-if="post.images" :images="post.images"/>  
        </div>
    </div>
</template>

<script>
import PostTextContent from "./PostTextContent";
import PostImages from "./PostImages";
import Avatar from "./Avatar";

export default {
   name:"ref-post",
   props:['post','refAuthorName'],
   components:{
     PostTextContent,PostImages,Avatar
   },

}
</script>

<style scoped>
.ref-original-post{
    border: 1px solid rgb(128, 125, 125);
    border-radius: 5px;
    padding: 10px;
    background: white;
    cursor: pointer;
    box-shadow: 1px 1px 3px rgb(150, 150, 150);
}

.ref-post-meta{
    display: flex;
}
.ref-post-meta .info{
    margin-left: 10px;
}
.author-img{
 font-size: 1.2em;
}
.ref-post-content{
    padding: 5px 10px;
}
.pub-date{
    font-size: 0.8em;
    color: rgb(116, 115, 115);
}

</style>
<style>
    .ptag{
        color: blue;
        font-weight: bold;
    }
    .f-content{
        font-family: inherit;
        padding: 0px;
        margin: 5px;
    }
    .content-fallback{
        font-weight: bold;
        font-style: italic;
        color: rgb(131, 130, 130);
    }
</style>