
import './Topbar.scss';
const Topbar = () => {
    return (
        <div className="topbar">
            <div className="logo"><a href="/">TECH MASTER</a></div>
            <nav className='nav-banner'>
                <div className="nav-banner__mobie">
                    <a href="" id="nav-banner__mobie__toggle">
                        <span>X</span>
                    </a>
                </div>
                <ul>
                    <li><a href="#">Giới thiệu</a> </li>
                    <li><a href="#">Giảng viên</a></li>
                    <li><a href="#">Chương trình học</a></li>
                    <li><a href="#">Chi tiết khóa học</a></li>
                    <li><button className='btn' >Đăng ký học</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Topbar