import React from 'react';

interface LeftBenefitProps {
    title: string;
    icon?: React.ReactNode;
    descriptionPhone: string;
    descriptionDestop: string;
}

const LeftBenefit: React.FC<LeftBenefitProps> = ({ title, icon, descriptionPhone,descriptionDestop }) => {
    return (
        <div className=' flex flex-col'>
            <div className="flex items-start gap-[12px] lg:gap-[32px]">
                <div className="w-[32px] h-[32px] md:h-[50px] md:w-[50px] min-w-[32px] min-h-[32px] bg-primary-500 flex justify-center items-center flex-shrink-0 rounded-[6px] md:rounded-[12px]">
                    {icon}
                </div>
                
                <div className="flex flex-col gap-[12px]">
                <span className="text-medium-16 text-secondary-900 mt-1 flex items-center">{title}</span>
                    <span className="text-regular-12 md:hidden text-secondary-400 mt-1"
                    dangerouslySetInnerHTML={{ __html: descriptionPhone || "" }}
                    />
                     <span className="text-regular-12 hidden md:block text-secondary-400 mt-1"
                    dangerouslySetInnerHTML={{ __html: descriptionDestop || "" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftBenefit;