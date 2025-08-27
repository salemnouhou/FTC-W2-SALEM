// import React, { ReactNode } from "react";
// import clsx from "clsx";
// import Image from "next/image";
// import { desc, div } from "motion/react-client";

// type CardVariant = "testimonial" | "benefitsOne" | "default";

// interface CardProps {
//   variant?: CardVariant;
//   children?: ReactNode;
//   image?: string;
//   title?: string;
//   description?: string;
//   author?: string;
//   className?: string;
//   benefitType?: string;
// }

// const Card: React.FC<CardProps> = ({
//   variant = "default",
//   children,
//   image,
//   title,
//   description,
//   author,
//   className,
//   benefitType,
// }) => {
//   let content;

//   if (variant === "testimonial") {
//     content = (
//       <div className="bg-primary/10 text-primary shadow-lg rounded-xl p-6 border-l-4 border-primary">
//         <p className="italic">{description}</p>
//         {author && <span className="block mt-2 font-semibold">- {author}</span>}
//       </div>
//     );
//   } else if (variant === "benefitsOne") {
//     content = (
//       <div>
//         <div className="bg-secondary-100/40 h-[325px] md: h-[307px]   relative  rounded-[10.16px] p-4  overflow-hidden">
//           {image && benefitType === "first" && (
//             <Image
//               src={image}
//               alt="title"
//               width={320}

//               className=" absolute top-[25px]  -left-4 left-2  z-0"
//             />
//           )}

//           {image && benefitType === "second" && (
//             <Image
//               src={image}
//               alt="title"
//               width={320}
//               className=" absolute top-[46px]  -left-4  left-2  z-0"
//             />
//           )}


//           {image && benefitType === "third" && (
//             <Image
//               src={image}
//               alt="title"
//               width={310}
//               className=" absolute top-[39px]  -left-4  left-2  z-0"
//             />
//           )}
//           {/* Contenu de la carte - assurez-vous que le contenu a un z-index plus élevé */}
//           <div>

//           </div>
//         </div>
//         <div className="mt-4 space-y-4">
//           <span className="text-secondary-900 text-medium-18">{title}</span>
//           <p
//             className="text-regular-12 text-secondary-400"
//             dangerouslySetInnerHTML={{ __html: description }}
//           ></p>

//         </div>
//       </div>
//     );
//   } else {
//     content = (
//       <div className="bg-white shadow-md rounded-lg p-4">
//         {children}
//       </div>
//     );
//   }

//   return <div className={clsx("transition-all duration-200", className)}>{content}</div>;
// };

// export default Card;



import React, { ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";

type CardVariant = "testimonial" | "benefitsOne" | "benefitsTwo";

interface CardProps {
  variant?: CardVariant;
  children?: ReactNode;
  image?: string;
  title?: string;
  description?: string;
  author?: string;
  className?: string;
  benefitType?: string;
}

const Card: React.FC<CardProps> = ({
  variant = "default",
  children,
  image,
  title,
  description,
  author,
  className,
  benefitType,
}) => {
  let content;

  if (variant === "testimonial") {
    content = (
      <div className="bg-primary/10 text-primary border  rounded-xl p-6">
        <p className="italic">{description}</p>
        {author && <span className="block mt-2 font-semibold">- {author}</span>}
      </div>
    );
  } else if (variant === "benefitsOne") {
    content = (
      <div>
        
        <div className="bg-gray-100  h-[325px] md:h-[307px] relative rounded-[10.16px]  overflow-hidden">
          {image && benefitType === "first" && (
            <Image
              src={image}
              alt="title"
              width={320}
              height={200}
              className="absolute w-full -bottom-[120px] md:-bottom-[70px] lg:-bottom-[120px] right-4 z-0 "
            />
          )}
          {image && benefitType === "second" && (
            <Image
              src={image}
              alt="title"
              width={320}
              height={200}
              className="absolute w-full  -bottom-[120px] md:-bottom-[70px] lg:-bottom-[120px] right-4 z-0 "
            />
          )}
        

          {image && benefitType === "third" && (
            <Image
              src={image}
              alt="title"
              width={320}
              height={200}
              className="absolute w-full  -bottom-[120px] md:-bottom-[70px] lg:-bottom-[120px] right-4    z-0 "
            />
          )}




        </div>

        <div className="mt-4 space-y-4  px-1 rounded-[10.16px]">
          <span className="text-secondary-900 text-medium-18">{title}</span>
          <p
            className="text-regular-12 text-secondary-400"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
        </div>
      </div>
    );
  } else if (variant === "benefitsTwo") {
    content = (
      <div>
        <div className="bg-gray-100  h-[325px] md:h-[307px] relative rounded-[10.16px]  overflow-hidden">
          {image && (
            <Image
              src={image}
              alt="title"
              width={320}
              height={200}
              className="absolute w-full bottom-0 right-0 z-0 "
            />
          )}




        </div>


      </div>
    );
  }

  return <div className={clsx("transition-all duration-200", className)}>{content}</div>;
};

export default Card;