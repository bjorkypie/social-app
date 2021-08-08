import "./topbar.css"
import Search from "@material-ui/icons/Search"
import Person from "@material-ui/icons/Person"
import Chat from "@material-ui/icons/Chat"
import Notifications from "@material-ui/icons/Notifications"

export default function Topbar() {
    return (
        <div class="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Bjorksocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search />
                    <input placeholder="Search for friends, post or video" className="search" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
        </div>
    )
}