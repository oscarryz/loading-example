import React from 'react';
import Skeleton from 'react-loading-skeleton'

export default function User(props) {
    const { avatar, first_name, last_name, email } = props.data || {};

    return <div className="md:flex bg-white rounded-lg p-6">
        {avatar
         ? <img className="h-12 w-12 md:h-16 md:w-16 rounded-full mx-auto md:mx-0 md:mr-4" src={avatar} />
         : 
            <div className="h-12 w-12 md:mr-6">
                <Skeleton circle={true} width={60} height={60} />
            </div>
        }
        <div className="text-center md:text-left">
            <h2 className="text-lg">{first_name || <Skeleton width={150} />} {last_name}</h2>
            <div className="text-gray-600">{email || <Skeleton />}</div>
        </div>
    </div>;
}
