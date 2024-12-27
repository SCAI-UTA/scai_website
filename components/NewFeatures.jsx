// import styles from '../styles';

// const NewFeatures = ({ imgUrl, title, subtitle }) => (
//   <div className="flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
//     <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24] bg-[#323f5d]`}>
//       <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
//     </div>
//     <h2 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">{title}</h2>
//     <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
//   </div>
// );

// export default NewFeatures;
import styles from '../styles';

const NewFeatures = ({ imgUrl, title,  date ,subtitle}) => (
  <div className="flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h2 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">{title}</h2>
    <p className="mt-[10px] font-normal text-[14px] text-[#b0b0b0] leading-[24px]">{date}</p> {/* Added date */}
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
    
  </div>
);

const FeaturesList = () => (
  <div className="features-list">
    {newFeatures.map((feature, index) => (
      <FeatureItem
        key={index}
        imgUrl={feature.imgUrl}
        title={feature.title}
        date={feature.date} // Pass the date here
        subtitle={feature.subtitle}
        
      />
    ))}
  </div>
);

export default NewFeatures;
