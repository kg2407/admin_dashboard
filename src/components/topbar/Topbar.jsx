import React from 'react'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
//import Badge from '@material-ui/core/Badge';
import './topbar.css'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="toolbarIconContainer">
                        {/* <Badge badgeContent={4} color="secondary">
                            <NotificationsNone />
                        </Badge> */}
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="toolbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="toolbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
