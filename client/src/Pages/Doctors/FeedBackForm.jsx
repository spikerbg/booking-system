import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import * as reviewsService from "../../serviceR/reviewsService.js";
import * as doctorService from "../../serviceR/doctorService.js";

const FeedBackForm = ({ doctor }) => {
  const [rating, setRating] = useState(0);
  const [hover, sethover] = useState(0);
  const [reviewtext, setReviewText] = useState("");
  const [newReview, setNewReview] = useState([])
  const { id, name, username,doctorId /* other properties */ } = doctor;
  const handleSubmitReview = async (e) => {
    e.preventDefault();
 // Create new FormData object

 const formData = new FormData(e.currentTarget)
 const newComment = await reviewsService.create({
  id: formData.get('id'),
  doctorId: formData.get('doctorId'),
  username: formData.get('username'),
  rating: formData.get('rating', String(rating)),
  reviewtext: formData.get('reviewtext')

});
  console.log(newComment)


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
              value={rating}
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
      <div className="mb-6">
      <input type="hidden" name="id" value={id} />
<input type="hidden" name="doctorId" value={doctor.id} />
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          User Name
        </h3>
    <input type="text" placeholder="UserName" id="username" name="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Share your feedback or suggestion*
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          placeholder="Write your message"
          name="reviewtext"
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
