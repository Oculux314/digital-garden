"use client";
import React, { useState } from 'react';

const FriendsBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Test friends list
    const friends = [
        { name: 'Gavin', status: 'Online' },
        { name: 'Ray', status: 'Online' },
        { name: 'Andy', status: 'Offline' },
        { name: 'Nate', status: 'Offline'},
        { name: 'Toby', status: 'Offline'},
        { name: 'Jianing', status: 'Offline'}
    ];

    const toggleFriendsBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`fixed top-0 left-0 h-full bg-green-800 text-white p-4 shadow-lg transition-transform duration-300 ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full'}`}>
                <ul>
                    <li className="mb-4 font-bold">Online</li>
                    {friends.filter(friend => friend.status === 'Online').map((friend, index) => (
                        <li key={index} className="mb-2">{friend.name}</li>
                    ))}
                    
                    <li className="mb-4 font-bold mt-6">Offline</li>
                    {friends.filter(friend => friend.status === 'Offline').map((friend, index) => (
                        <li key={index} className="mb-2">{friend.name}</li>
                    ))}
                </ul>
            </div>
            <button className={`fixed top-4 left-4 bg-green-800 text-white p-2 rounded transition-transform duration-300 ${isOpen ? 'translate-x-[260px]' : 'translate-x-0'}`}  
            onClick={toggleFriendsBar}
            style={{ whiteSpace: 'nowrap' }}>
                {isOpen ? 'Close' : 'Friends'}
            </button>
        </div>
    );
};

export default FriendsBar;
