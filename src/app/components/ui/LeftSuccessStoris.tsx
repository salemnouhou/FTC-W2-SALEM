import React from 'react';

interface LeftSuccessStoriesProps {
    icon?: React.ReactNode;
    descriptionPhone: string;
    descriptionDestop: string;
}

const LeftSuccessStories: React.FC<LeftSuccessStoriesProps> = ({ icon, descriptionPhone,descriptionDestop }) => {
    return (
        <div className=' flex flex-col'>
            <div className="flex items-start gap-[12px] ">
                <div className="w-[24px] h-[24px]   min-w-[24px] min-h-[24px]  flex justify-center items-center flex-shrink-0 rounded-[6px] md:rounded-[12px]">
                    {icon}
                </div>
                
                <div className="flex flex-col gap-[12px]">
                    <span className="text-medium-12 md:text-medium-18 lg:hidden text-secondary-700 mt-1"
                    dangerouslySetInnerHTML={{ __html: descriptionPhone || "" }}
                    />
                     <span className="text-medium-18 hidden lg:block text-secondary-700 mt-1"
                    dangerouslySetInnerHTML={{ __html: descriptionDestop || "" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftSuccessStories;