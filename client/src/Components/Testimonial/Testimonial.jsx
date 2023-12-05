import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";
import styles from "../../Components/style/testimonial.module.css"
const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper className="pt-10"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className={styles['maindiv']}>
            <div className={styles['seconddiv']}>
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Olivia Bennett
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            I wanted to express my deepest gratitude for the exceptional care and expertise you provided during my recent medical journey. Your dedication to your profession is truly commendable. Your ability to explain complex medical concepts in a way that is easy to understand gave me great confidence and peace of mind.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['maindiv']}>
            <div className={styles['seconddiv']}>
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Ethan Wallace
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            I am writing this testimonial to express my gratitude for the exceptional medical care provided by Dr. Krus. From the moment I walked into the clinic, I was greeted with warmth and professionalism by the entire staff.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['maindiv']}>
            <div className={styles['seconddiv']}>
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Ava Thompson
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            Your kindness and genuine concern for your patients go beyond the call of duty. I appreciate the time you took to listen to my concerns and answer all of my questions, making me feel heard and valued. Your unwavering commitment to my well-being has made a lasting impact on my life, and I am truly fortunate to have you as my doctor.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['maindiv']}>
            <div className={styles['seconddiv']}>
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Mason Parker
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            I wholeheartedly recommend Dr. [Doctor's Name] to anyone seeking a knowledgeable, caring, and dedicated healthcare professional. My experience under Dr. Ivan's care has been nothing short of excellent.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['maindiv']}>
            <div className={styles['seconddiv']}>
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Zoey Mitchell
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            Dr. Krisko possesses a rare combination of medical expertise and genuine compassion. During my visits, I felt not only heard but truly understood. The level of detail and attention to my individual needs demonstrated by Dr. Krisko is unparalleled.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
