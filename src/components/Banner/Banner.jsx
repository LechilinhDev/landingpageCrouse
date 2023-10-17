import './Banner.scss';
import banner from '../../assets/bannerHeader.svg';
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <h2>KHÓA HỌC PHÂN TÍCH NGHIỆP VỤ BUSINESS ANALYSIS</h2>
                <ul>
                    <li>Đào tạo sinh viên  làm được BA kết nối giữa khách hàng và đội lập trình</li>
                    <li>Đào tạo tester viết chuẩn test case</li>
                    <li>Học xong sv có thể làm BA cho các dự án phầm mềm ngân hàng, tài chính, gia công phần mềm</li>
                    <li>Đối với những bạn đã biết tiếng Nhật, Hàn thì học BA để có thể làm Compter</li>
                </ul>
                <button className='btn'>Đăng ký học ngay</button>
            </div>
            <div className="banner__picture">
                <img src={banner} alt="khoa-hoc-nghiep-vu-business-analysis" />
            </div>
        </div>
    )
}

export default Banner;