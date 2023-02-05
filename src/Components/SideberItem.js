import React, { useState } from 'react';

const SideberItem = () => {
    const [open,setOpen] = useState(false);
    

    return (
        <div className={open ? 'sideber-item open': 'sideber-item'}>
            <div className='sideber-title'>
                <span>
                    <i className='bi-gear-fill'></i>
                    General
                </span>
                <i className='bi-chevron-down title-btn' onClick={() => setOpen
                (!open)}></i>
            </div>
            <div className='sideber-content'>
                hello
            </div>
        </div>
    );
};

export default SideberItem;