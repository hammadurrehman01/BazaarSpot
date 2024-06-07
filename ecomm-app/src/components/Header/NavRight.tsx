import SearchIcon from '../../assets/images/searchIcon.svg'
import WishList from '../../assets/images/HeartWishlist.svg'
import CartIcon from '../../assets/images/CartIcon.svg'


const NavRight = () => {
    return (
        <div>
            <div>
            <input type="text" placeholder="What are you looking for?" />
            <img src={SearchIcon} alt="search icon" />
            </div>
        <img src={WishList} alt="wishlist" />
        <img src={CartIcon} alt="cart" />
        </div>
    )
}

export default NavRight;