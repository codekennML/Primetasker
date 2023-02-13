import {
  faChevronCircleDown,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Icon from "../utils/Icon";
import SingleFAQ from "./SingleFAQ";

const FAQS = () => {
  const [openFaq, setOpenFaq] = useState(false);
  return (
    <section class="max-w-screen-lg mt-16 flex flex-row">
      <article class="w-1/3 bg-blue-50 text-2xl font-bold px-12 pt-6">
        FAQs about Lagos Continental Hotel
      </article>
      <article class="w-3/4 ">
        {/* <div class=' border border-blue-100' >
                        <div class='px-3 py-2'>
                        <div class='font-bold flex flex-row items-start justify-between cursor-pointer ' onClick={() => setOpenFaq(!openFaq)}>
                           <p>
                           What are the check-in and check-out times at Lagos Continental Hotel?
                            </p> 
                              <p class='self-start'>
                             <Icon icon =  { openFaq ?  faChevronDown : faChevronUp } class = {` border-2 p-1.5 border-blue-200 shadow-sm text-xs`}/> 
                            </p> 
                        </div>
                    {openFaq &&  <p class='text-xs mt-2 '>Check-in at Lagos Continental Hotel is from 14:00, and check-out is until 12:00.</p>} 
                        </div>
                </div> */}
        {/* <div class=' border border-blue-100' >
                        <div class='px-3 py-2'>
                        <div class='font-bold flex flex-row items-start justify-between cursor-pointer ' onClick={() => setOpenFaq(!openFaq)}>
                           <p>
                           What are the check-in and check-out times at Lagos Continental Hotel?
                            </p> 
                              <p class='self-start'>
                             <Icon icon =  { openFaq ?  faChevronDown : faChevronUp } class = {` border-2 p-1.5 border-blue-200 shadow-sm text-xs`}/> 
                            </p> 
                        </div>
                    {openFaq &&  <p class='text-xs mt-2 '>Check-in at Lagos Continental Hotel is from 14:00, and check-out is until 12:00.</p>} 
                        </div>
                </div> */}
        <div>
          <SingleFAQ />
          <SingleFAQ />
          <SingleFAQ />
          <SingleFAQ />
          <SingleFAQ />
          <SingleFAQ />
          <SingleFAQ />
          <SingleFAQ />
          <SingleFAQ />
        </div>
      </article>
    </section>
  );
};

export default FAQS;
