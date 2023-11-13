import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import * as reviewsService from "../../serviceR/reviewsService.js";
import * as doctorService from "../../serviceR/doctorService.js";

const FeedBackForm = ({doctor,id}) => {
  const [rating, setRating] = useState(0);
  const [hover, sethover] = useState(0);
  const [reviewtext, setReviewText] = useState("");
  const [newReview, setNewReview] = useState([])

  const handleSubmitReview = async (e) => {
    e.preventDefault();
 // Create new FormData object
 const formData = new FormData();

  // Append form data
  formData.append("doctorId", doctor);
  

 // Create new review at the server
 const newReview = await reviewsService.create(formData);

 // Add the newly created review to the local state
 setNewReview((state) => [...state, newReview]);

  };
  return (
    <form onSubmit={handleSubmitReview}>
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
        How would you rate the overall experience ?*
      </h3>
      <div>
        {[...Array(5).keys()].map((_, index) => {
          index += 1;
          return (
            <button
              key={index}
              type="button"
              name="rating"
              className={`${
                index <= ((rating && hover) || hover)
                  ? "text-yellowColor"
                  : "text-gray-400"
              } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
              onClick={() => setRating(index)}
              onMouseLeave={() => sethover(rating)}
              onMouseEnter={() => sethover(index)}
              onDoubleClick={() => {
                sethover(0);
                setRating(0);
              }}
            >
              <span>
                <AiFillStar />
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Share your feedback or suggestion*
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          placeholder="Write your message"
          name="text"
          rows={5}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedBackForm;
