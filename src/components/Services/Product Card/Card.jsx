import './Card.css'
import PropTypes from 'prop-types'
const Card = (props) => {
  return (
    <div>
       <div className='container_product_card'>
        <div className='product_card'>
            <div className='top_card'>
                {/* img, price */}
                <img src={props.productImage} className="product_image"/>
                
            </div>
            <div className='bottom_card'>
                {/* name, desc, cta */}
                <div className='product_name'>
                    <h6>Nike</h6>
                          <h4>{props.productName}</h4>
                </div>
                <div className='product_description'>
                          <p>{props.productDecription}</p>
                </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card
Card.propTypes = {
    productImage: PropTypes.string,
    productName: PropTypes.string,
    productDecription: PropTypes.string
}
