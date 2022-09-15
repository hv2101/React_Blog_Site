import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.unsplash.com/photo-1663017769302-d8ad32f2ff73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    This is blog posting site made using React.
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                This is blog posting site made using React. This is blog posting site made using React.
                This is blog posting site made using React. This is blog posting site made using React.
                This is blog posting site made using React. This is blog posting site made using React.
                This is blog posting site made using React. This is blog posting site made using React.
                This is blog posting site made using React. This is blog posting site made using React.
                This is blog posting site made using React.
                This is blog posting site made using React.
            </p>
        </div>
    );
}