import './infomation.scss';
import info1 from '../../assets/info1.svg';
import info2 from '../../assets/info2.svg';
import info3 from '../../assets/info3.svg';
import info4 from '../../assets/info4.svg';
const Infomation = () => {
    return (
        <section className="infomationCourse">
            <h3 className='text-center'>GIỚI THIỆU KHÓA HỌC</h3>
            <div className="infomationCourse__contentCourse">
                <div className="infomationCourse__contentCourse__layout">
                    <div className="infomationCourse__contentCourse__layout__img">
                        <img src={info1} alt="Khoa-hoc-BA-danh-cho-sinh-vien" />
                    </div>
                    <div className="infomationCourse__contentCourse__layout__text">
                        <b>Đào tạo sinh viên CNTT, tài chính, ngân hàng</b>
                        <p>
                            Các kiến thức cơ bản và nâng cao giúp sinh viên ra trường có thể làm việc ở vị trí quan trọng trong công ty là BA kết nối giữa khách hàng và đội ngũ lập trình viên, cung cấp các kỹ năng từ cơ bản đến nâng cao giúp sinh viên 100% có cơ hội tham gia các dự án lớn trong và ngoài nước.
                        </p>
                    </div>
                </div>

                <div className="infomationCourse__contentCourse__layout">

                    <div className="infomationCourse__contentCourse__layout__text">
                        <b>Đối tượng là các bạn đã biết tiếng Nhật, Hàn</b>
                        <p>
                            Các kiến thức cơ bản và nâng cao giúp sinh viên ra trường có thể làm việc ở vị trí quan trọng trong công ty là BA kết nối giữa khách hàng và đội ngũ lập trình viên, cung cấp các kỹ năng từ cơ bản đến nâng cao giúp sinh viên 100% có cơ hội tham gia các dự án lớn trong và ngoài nước.
                        </p>
                    </div>
                    <div className="infomationCourse__contentCourse__layout__img">
                        <img src={info2} alt="Khoa-hoc-BA-danh-cho-sinh-vien" />
                    </div>
                </div>

                <div className="infomationCourse__contentCourse__layout">

                    <div className="infomationCourse__contentCourse__layout__img">
                        <img src={info3} alt="Khoa-hoc-BA-danh-cho-sinh-vien" />
                    </div>

                    <div className="infomationCourse__contentCourse__layout__text">
                        <b>Đối tượng là các bạn tester</b>
                        <p>
                            Các kiến thức cơ bản và nâng cao giúp sinh viên ra trường có thể làm việc ở vị trí quan trọng trong công ty là BA kết nối giữa khách hàng và đội ngũ lập trình viên, cung cấp các kỹ năng từ cơ bản đến nâng cao giúp sinh viên 100% có cơ hội tham gia các dự án lớn trong và ngoài nước.
                        </p>
                    </div>

                </div>

                <div className="infomationCourse__contentCourse__layout">

                    <div className="infomationCourse__contentCourse__layout__text">
                        <b>Làm BA cho hệ thống ngân hàng, tài chính ...</b>
                        <p>
                            Các kiến thức cơ bản và nâng cao giúp sinh viên ra trường có thể làm việc ở vị trí quan trọng trong công ty là BA kết nối giữa khách hàng và đội ngũ lập trình viên, cung cấp các kỹ năng từ cơ bản đến nâng cao giúp sinh viên 100% có cơ hội tham gia các dự án lớn trong và ngoài nước.
                        </p>
                    </div>
                    <div className="infomationCourse__contentCourse__layout__img">
                        <img src={info4} alt="Khoa-hoc-BA-danh-cho-sinh-vien" />
                    </div>
                </div>


            </div>
        </section>
    )
}
export default Infomation;