import React from "react";
import {useSelector} from 'react-redux'
import {BiCommentDetail, BiSearch} from 'react-icons/bi';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {useState} from 'react';
import * as api from '../api/index.js'
const Sidebar = () => {
    const {user} = useSelector(state => state.user)
    const {rooms,setRooms} = useState([]);

    // console.log(user)
    const persons = [
        {
            name:"atakan",
            avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            lastMsg: "dnme dneme",
            date: "12-10-2023"
        },
        {
            name:"atakan",
            avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            lastMsg: "dnme dneme",
            date: "12-10-2023"
        },
        {
            name:"atakan",
            avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            lastMsg: "dnme dneme",
            date: "12-10-2023"
        },
        {
            name:"atakan",
            avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            lastMsg: "dnme dneme",
            date: "12-10-2023"
        },
        {
            name:"atakan",
            avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            lastMsg: "dnme dneme",
            date: "12-10-2023"
        },
        {
            name:"atakan",
            avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
            lastMsg: "dnme dneme",
            date: "12-10-2023"
        },
    ]

    const addPerson = async() => {
        const newPrompt = prompt('isim giriniz')
        if(newPrompt){
            
            const {data} = await api.createRoomApi({groupName: newPrompt})
            console.log(data,"data")
            console.log(newPrompt)
            // setRooms(...rooms,)

        }
    }

    return (
        <div className="w-1/4 border-r">
            <div className="bg-gray-200 h-16 flex items-center justify-between p-3">
                <img className = 'w-10 rounded-full' src = {user?.photoURL} alt = "" />
                <div className="flex items-center gap-5">
                    <BiCommentDetail size={23} className="text-gray-600 cursor-pointer "/>
                    <BsThreeDotsVertical size={23} className="text-gray-600 cursor-pointer "/>
                </div>
            </div>
            <div className="bg-gray-100 flex items-center p-2">
                <div className="bg-white flex items-center gap-2 border p-2 rounded-lg flex-1">
                <BiSearch size={20} className= "text-gray-600"/>
                <input className="outline-none border-none bg-transparent flex-1" type="text" placeholder="Arama"/>
                </div>
            </div>
            <div onClick={addPerson} className="bg-green-600 text-white p-2 m-2 text-center rounded-lg cursor-pointer hover: opacity-90 transition-opacity">
                yeni kişi ekle
            </div>
            <div>
                {
                    persons.map((person,i) => {
                        return(
                            <div key={i} className="flex items-center justify-between p-2 m-2 cursor-pointer hover:bg-gray-200">
                            <div className="flex items-start gap-2"> 
                            <img className = 'w-10 rounded-full' src={person.avatar} alt ="" />
                                <div>
                                    <div className="font-bold"> {person.name}</div>
                                    <div className="text-xs text-gray-700 "> {person.lastMsg}</div>
                                </div>
                            </div>
                                <div className="text-xs text-gray-700 ">
                                    {person.date}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Sidebar