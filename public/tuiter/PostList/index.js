import post from "./post.js";
import PostItem from "./PostItem.js";
const PostList = () => {
    return (`
        <ul class="list-group">
            ${post.map(item => PostItem(item)).join('')}
        </ul>
            `);
}

export default PostList;