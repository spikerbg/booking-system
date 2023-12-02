import { useState } from "react";
import { AiFillStar } from "react-icons/ai";


const FeedBackForm = ({ doctor, onSubmit  }) => {
  const [rating, setRating] = useState([]);
  const [hover, sethover] = useState(0);
  const [reviewtext, setReviewText] = useState("");
  const { id } = doctor;
  const handleSubmitForm = async (e) => {
    e.preventDefault();
  
    // Create new FormData object
    const formData = new FormData(e.currentTarget);
  
    // Call the onSubmit prop with formData
    onSubmit(formData);
  };;
  return (
    <form onSubmit={handleSubmitForm}>
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
        How would you rate the overall experience ?*
      </h3>
      
      <div>
        {[...Array(5).keys()].map((_, index) => {
          index += 1;
          return (
            <button
              key={index}
              value={index}
              type="button"
              name="rating"
              className={`${
                index <= ((rating && hover) || hover)
                  ? "text-yellowColor"
                  : "text-gray-400"
              } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
              onClick={() => setRating(index)}
              onMouseLeave={() => sethover(index)}
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
<input type="hidden" name="rating" value={rating} />
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          User Name
        </h3>
    <input type="text" placeholder="UserName" id="username" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div>
<input type="hidden" placeholder="empty" id="empty" name="empty" value="1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
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
