import React from 'react';
import {SectionTitleProps} from '@/types/props';

const SectionInfo: React.FC<SectionTitleProps> = ({
                                                       text,
                                                       color = '#07006C',
                                                       opacity = 0.12,
                                                   }) => {
    const bgColorWithOpacity = `${color}${Math.round(opacity * 255)
        .toString(16)
        .padStart(2, '0')}`;

    return (
        <div className="w-full h-[40px] text-[18px] font-[600] mb-[15px] rounded-[5px] flex items-center no-underline text-[#1a1a1a] relative my-[18px]"
             style={{ backgroundColor: bgColorWithOpacity }}>
              <span
                  className="absolute left-0 top-0 h-full w-[10px] rounded-[5px]"
                  style={{ backgroundColor: bgColorWithOpacity }}
              />
            <span className="relative z-10 ml-[21px]">
                {text}
            </span>
            <div
                className="absolute inset-0 rounded-[5px]"
                style={{ backgroundColor: bgColorWithOpacity }}
            />
        </div>
    );
};

export default SectionInfo;