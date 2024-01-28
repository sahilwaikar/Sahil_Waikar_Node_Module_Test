import React from 'react'
import '../Style/banner.css'
import group_logo from '../utils/Group-1.png'
const Banner = () => {
    return (
        <div className='container'>
            <div className='animal_shelter'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='inner_banner_left'>
                            <h6 className='inner_b_left_head'>Welcome to the Animal Shelter !</h6>
                            <p className='inner_b_left_p'>Glad that you care for the animals so much. We make sure that you’ll not repent your decision of adopting your favorite pet !!</p>
                            <button type="button" class="btn btn-danger">Adopt</button>
                            <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='inner_banner_right'>
                            <img className='' src={group_logo} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner