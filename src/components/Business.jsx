import { features } from "../constants";
import styles, { layout } from "../style";
// import Button from "../Button";


const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );


export const Business = () => (
  <section id="features" className={`flex sm:flex-row ${styles.flexCenter} flex-col`}>
    <div className="flex flex-col items-start sm:my-6 my-2 ">
      <h1 className="text-white max-w-[520px] text-4xl font-poppins font-bold leading-[70px]"> You do the business,
        we'll handle the money.</h1>
      <p className="sm:py-10 py-6 font-poppins text-sm max-w-[420px] text-slate-600 leading-6">With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with
        hundreds of credit cards on the market.</p>

      <button className={`${styles.flexCenter} border-none text-xs font-poppins font-semibold bg-blue-gradient rounded-[6px] p-[13px]`}>
        Get Started
      </button>

      {/* <Button /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
       {features.map((feature, index) => (
         <FeatureCard key={feature.id} {...feature} index={index} />
       ))}
     </div>

  </section>
)

export default Business;



// import { features } from "../constants";
// import styles, { layout } from "../style";
// import Button from "./Button";

// const FeatureCard = ({ icon, title, content, index }) => (
//   <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
//     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
//       <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
//     </div>
//     <div className="flex-1 flex flex-col ml-3">
//       <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
//         {title}
//       </h4>
//       <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </div>
// );

// const Business = () =>  (
//   <section id="features" className={layout.section}>
//     <div className={layout.sectionInfo}>
//       <h2 className={styles.heading2}>
//         You do the business, <br className="sm:block hidden" /> we’ll handle
//         the money.
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         With the right credit card, you can improve your financial life by
//         building credit, earning rewards and saving money. But with hundreds
//         of credit cards on the market.
//       </p>

//       <Button styles={`mt-10`} />
//     </div>

//     <div className={`${layout.sectionImg} flex-col`}>
//       {features.map((feature, index) => (
//         <FeatureCard key={feature.id} {...feature} index={index} />
//       ))}
//     </div>
//   </section>
// );

// export default Business;






