function CommentSliderEl({data}) {
    return ( 
        <>
                <div className="comment_slider_elements">
                  <div className="comment" data-aos="wake-up" data-aos-duration="1500" >
                    <img  src={`/images/comments/${data.userImage}`} alt=""/>
                  <div className="comment_text">
                    <p>{data.comment}</p>
                  </div>
                  <div className="commenter_name_rank text-end">
                    <p className="text-end">{data.userName}</p>
                    <p className="text-end">{data.userRoll}</p>
                  </div>
                </div>
                </div>
        </>
     );
}

export default CommentSliderEl;