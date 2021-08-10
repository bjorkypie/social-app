import "./rightbar.css"

export default function Rightbar() {
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Paul Foster</b> and <b>3 other friends</b> have a birthday today!</span>
                </div>
                <img src="assets/ad-julian-myles-8nZG2m92xwU-unsplash.jpg" alt="" className="rightbarAd"/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/jan-kopriva-iTeWbTWsSso-unsplash.jpg" alt="" className="rightbarProfileImg" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}