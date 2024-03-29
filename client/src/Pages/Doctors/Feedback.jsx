/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import FeedBackForm from "./FeedBackForm.jsx";
import * as reviewsService from "../../serviceR/reviewsService.js";
import { formatDate } from "../../utils/dataUtils.js";
import { AiFillStar } from "react-icons/ai";
import styles from "../../Components/style/feedback.module.css"

const Feedback = ({ doctor }) => {
  const [feedbackForm, setFeedbackForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { id,doctorId, totalRating } = doctor;

  useEffect(() => {
    // vzimam revuto za vseki edin doktor spored idto
    reviewsService.getAll(id)
      .then((result) => {
        setReviews(result);
      })
      .catch((err) => console.log(err));
  }, [id]);
 
  const handleSubmitReview = async (formData) => {
    try {
      // dabavqne na now feedback
      const newComment = await reviewsService.create({
        id: formData.get("id"),
        doctorId: formData.get("doctorId"),
        username: formData.get("username"),
        rating: formData.get("rating"),
        reviewtext: formData.get("reviewtext"),
        empty: formData.get("empty")
      });
  
      // prezarejdane na steita s nowiq feedback
      setReviews((prevReviews) => [...prevReviews, newComment]);
      
      // kogato feedback e populen formata se zatwarq
      setFeedbackForm(false);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };



  return (
    <div>
    <div className="mb-[50px]">
      <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
        All review ({doctor.totalRating})
      </h4>
    </div>
    
      {reviews.map((items) => (
        <div key={items.id} className={styles['maindiv']}>
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={items.photo} alt="" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                {items.name}
              </h5>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                {items.username}
              </h5>
              <p>{items.reviewtext}</p>
              <p className="text-[14px] leading-6 text-textColor">{formatDate(items.date)}</p>
              <p className="text_para mt-3 font-medium text-[15px]">
                {items.reviews}
              </p>
            </div>
          </div>
          <div className="flex gap-1">
  {[...Array(Number(items.rating)).keys()].map((_, index) => (
    <AiFillStar key={index + 1} color="#0067FF" />
  ))}
  ({items.rating})
</div>
        </div>
      ))}
      {feedbackForm && <FeedBackForm doctor={doctor} doctorId={id} onSubmit={handleSubmitReview} />}
      <div>
      {!feedbackForm && (
        <div className="text-center">
          <button onClick={() => setFeedbackForm(true)} className="btn">
            Give Feedback
          </button>
        </div>
      )}
    </div>
  </div>
  );
};

export default Feedback;
