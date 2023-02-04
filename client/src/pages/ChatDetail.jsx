import React from "react";
import {MdOutlineLocationSearching} from 'react-icons/md'
import {useState} from 'react'; 
import InputEmoji from 'react-input-emoji';

const ChatDetail = () => {

    const [text, setText] = useState("");
    function handleOnEnter(text) {
        console.log("enter",text);
    }

    return(
        <div className='w-3/4 chatDetail'>
            <div className='h-16 bg-gray-200 px-4 py-2 flex items-center justify-between'>
                
                <div className='flex items-center gap-3'>
                <img className= 'w-10 rounded-full ' src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
                    <div className='font-bold'>
                        yyazilim
                    </div>
                    <div className='text-xs'>
                        16-11-2023
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <MdOutlineLocationSearching size={25} className='cursor-pointer text-gray-700'/>
                    <MdOutlineLocationSearching size={25} className='cursor-pointer text-gray-700'/>
                </div>
            </div>

        <div className='h-4/5 overflow-y-auto'>
            <div className='w-[400px] bg-green-300 rounded-md p-2 m-4 ml-auto'>
                <div>deneme mesajı</div>
                <div className='text-xs flex items-center justify-end '>16-10-2023</div>
                   
            </div>
            <div className='w-[400px] bg-green-300 rounded-md p-2 m-4 ml-auto'>
                <div>deneme mesajı</div>
                <div className='text-xs flex items-center justify-end '>16-10-2023</div>
                            
            </div>
            <div className='w-[400px] bg-white rounded-md p-2 m-4'>
                <div>deneme mesajı</div>
                <div className='text-xs flex items-center justify-end '>16-10-2023</div>
                            
            </div>
            <div className='w-[400px] bg-green-300 rounded-md p-2 m-4 ml-auto'>
                <div>deneme mesajı</div>
                <div className='text-xs flex items-center justify-end '>16-10-2023</div>                
            </div>
        </div>
        
        <div className='fixed bottom-5 w-3/4'>
            <InputEmoji
            
            value = {text}
            onChange = {setText}
            cleanOnEnter
            onEnter = {handleOnEnter}
            placeholder=""
            />
        </div>


        </div>
    )
}

export default ChatDetail 