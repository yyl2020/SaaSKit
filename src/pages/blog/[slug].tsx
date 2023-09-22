import {useStringParam} from "../../util/utils"
import React from 'react';

const BlogPostPage = () => {
    const slug = useStringParam('slug')

    return (
        <div>
            blog post: {slug}
        </div>
    );
};

export default BlogPostPage;
