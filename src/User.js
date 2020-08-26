import React from 'react';
import Skeleton from 'react-loading-skeleton'
export default function User(props) {
    const { avatar, first_name, last_name, email, title, phone } = props.data || {};
    return <div className="md:flex bg-white rounded-lg p-6">
        {avatar
         ? <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={avatar} />
         : <div className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6">
                <Skeleton circle={true} width={80} height={80} />
            </div>
        }
        <div className="text-center md:text-left">
            <h2 className="text-lg">{first_name || <Skeleton width={150} />} {last_name || <Skeleton />}</h2>
            <div className="text-purple-500">{title || <Skeleton />}</div>
            <div className="text-gray-600">{email || <Skeleton />}</div>
            <div className="text-gray-600">{phone || <Skeleton />}</div>
        </div>
    </div>;
}