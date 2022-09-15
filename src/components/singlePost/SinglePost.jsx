import "./singlePost.css"

export default function SinglePost() {
    return (
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <img src="https://images.unsplash.com/photo-1453090643118-eae60f5bc58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""
                         className="singlePostImg"
                    />
                    <h1 className="singlePostTitle">
                        This is blog posting site made using React.
                        <div className="singlePostEdit">
                            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                            <i className="singlePostIcon fa-regular fa-trash-can"></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Author: <b>Harsh</b></span>
                        <span className="singlePostDate"><b>1 hour ago</b></span>
                    </div>
                    <p className="singlePostDesc">This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React.This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React.This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React.This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React.This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React.This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React. This is blog posting site made using React.</p>
                </div>
            </div>
    );
}