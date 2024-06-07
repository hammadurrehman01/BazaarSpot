import SearchIcon from '../../assets/images/searchIcon.svg';
import WishList from '../../assets/images/HeartWishlist.svg';
import CartIcon from '../../assets/images/CartIcon.svg';

const NavRight = () => {
    return (
        <div className='flex py-4 gap-8'>
            <div className="relative flex items-center w-full max-w-lg bg-[var(--mainSecondaryLightWhite)] ">
                <input 
                    type="text" 
                    placeholder="What are you looking for?" 
                    className="w-full py-2 pl-4 pr-12 border-none shadow-sm focus:outline-none"
                />
                <img 
                    src={SearchIcon} 
                    alt="search icon" 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
            </div>
            <div className="flex items-center gap-4">
                <img src={WishList} alt="wishlist" width={50} />
                <img src={CartIcon} alt="cart" width={50} />
            </div>
        </div>
    );
};

export default NavRight;
