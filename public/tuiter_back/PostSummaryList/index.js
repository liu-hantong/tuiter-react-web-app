import post from "./post.js";
import postSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            ${post.map(item => postSummaryItem(item)).join('')}
        </ul>
            `);
}

export default PostSummaryList;