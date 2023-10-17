import './techingStaff.scss';
import techer1 from '../../assets/techer1.jpg';
const TechingStaff = () => {
    return (
        <section className="techingStaff">
            <h3 className='text-center'>ĐỘI NGŨ GIẢNG VIÊN</h3>
            <div className="techingStaff__card">
                <div className="techingStaff__card__item">
                    <div className="card">
                        <img src={techer1} alt="Đội ngũ giảng viên" className='card__img' />
                        <div className="card__body">
                            <h5 className='card__body__title'>Hồ Quang Tám</h5>
                            <b>Mobile leader tại công ty Abc</b>
                            <p className='card__body__text'>
                                <ul>
                                    <li>Hơn 6 năm phát triển phầm mềm tại Abc</li>
                                    <li>Hơn 8 năm phát triển úng dụng</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="techingStaff__card__item">
                    <div className="card">
                        <img src={techer1} alt="Đội ngũ giảng viên" className='card__img' />
                        <div className="card__body">
                            <h5 className='card__body__title'>Hồ Quang Tám</h5>
                            <p className='card__body__text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="techingStaff__card__item">
                    <div className="card">
                        <img src={techer1} alt="Đội ngũ giảng viên" className='card__img' />
                        <div className="card__body">
                            <h5 className='card__body__title'>Hồ Quang Tám</h5>
                            <p className='card__body__text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sit.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TechingStaff;