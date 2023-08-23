import React from 'react'
import Article from './Article'


function ArticleList({posts}) {
const articlePost = posts.map((postObj) => {
    
        return <Article
                    key={postObj.id} 
                    title={postObj.title} 
                    date={postObj.date}
                    preview={postObj.preview}
                    minutes={postObj.minutes} 
                />
})
console.log(articlePost)

    return (
        <main>
            {articlePost}
        </main>
    )
}

export default ArticleList
