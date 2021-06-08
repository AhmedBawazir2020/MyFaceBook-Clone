import React from 'react'
import "./Sideber.css"
import SideberRow from './SideberRow'
import LocalHotelOutlinedIcon from '@material-ui/icons/LocalHotelOutlined';
import EmojiFlagsOutlinedIcon from '@material-ui/icons/EmojiFlagsOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {ExpandMoreOutlined} from '@material-ui/icons';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import { useStateValue } from './StateProvider';


function Sideber() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sideber">
            <SideberRow src={user.photoURL} 
            title={user.displayName}
            />
            <SideberRow Icon={LocalHotelOutlinedIcon} title="Covid-19 Information Center" />
            <SideberRow Icon={EmojiFlagsOutlinedIcon} title="Pages" />
            <SideberRow Icon={PeopleOutlineOutlinedIcon} title="Friends"/>
            <SideberRow Icon={ChatIcon} title="Messenger" />
            <SideberRow Icon={StorefrontIcon} title=" Maektplace" />
            <SideberRow Icon={VideoLibraryIcon} title="Videos" />
            <SideberRow Icon={ExpandMoreOutlined} title ="Marktplace" />


        </div>
    )
}

export default Sideber
