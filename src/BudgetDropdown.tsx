import './BudgetDropdown.css'
import caretPointingDownwards from './images/caret pointing downwards.png';
import { GoTriangleDown } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import { TbDotsVertical } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import Categories from "./Categories.tsx";
import educationLogo from "./images/categorieLogos/educationLogo.png";
import entertainmentLogo from "./images/categorieLogos/entertainmentLogo.png";
import FoodLogo from "./images/categorieLogos/FoodLogo.png";
import groceriesLogo from "./images/categorieLogos/groceriesLogo.png";
import healthcareLogo from "./images/categorieLogos/healthcareLogo.png";
import housingLogo from "./images/categorieLogos/housingLogo.png";
import miscellaneousLogo from "./images/categorieLogos/miscellaneousLogo.png";
import officeLogo from "./images/categorieLogos/officeLogo.png";
import petsLogo from "./images/categorieLogos/petsLogo.png";
import shoppingcartLogo from "./images/categorieLogos/shoppingcartLogo.png";
import subscriptionsLogo from "./images/categorieLogos/subscriptionsLogo.png";
import TransportationLogo from "./images/categorieLogos/TransportationLogo.png";
import TravelLogo from "./images/categorieLogos/TravelLogo.png";

export default function BudgetDropdown() {
  return (
    <>
      <div className='budgetDropdown_main_container'>
        <div className='budgetDropdown_title'>
          <div className="budgetDropdown_container">
              <h1>Monthly Budget</h1>
              <img className="caret_icon2" src={caretPointingDownwards} alt="caret_icon" />
          </div>
            <button className="budgetDropdown_container3">
              <p className="selected_month">April 2022</p>
              <GoTriangleDown className="dropdown_icon" />
            </button>
        </div>
        <div className="sharing_options">
          <CiShare2 className="share_icon" />
          <TbDotsVertical className="share_icon" />
          <FaPlus className="icon_color" />
        </div>
      </div>
      <div className='categories'>
      <p className="font margin_bottom" style={{ marginBottom: '2rem', marginLeft: '.5rem'}}>
        Categories
      </p>
        <Categories logo={educationLogo} title="Education" total={'100'} spent={'40'} color="#41AEB7"/>
        <Categories logo={entertainmentLogo} title="Entertainment" total={'50'} spent={'10'} color="#FF8301"/>
        <Categories logo={FoodLogo} title="Food" total={'150'} spent={'68'} color="#213B80"/>
        <Categories logo={groceriesLogo} title="Groceries" total={'200'} spent={'100'} color="#00BC38"/>
        <Categories logo={healthcareLogo} title="Healthcare" total={'100'} spent={'100'} color="#AF3F9D"/>
        <Categories logo={housingLogo} title="Housing" total={'1,750'} spent={'1,750'} color="#FF373C"/>
        <Categories logo={miscellaneousLogo} title="Miscellaneous" total={'50'} spent={'0'} color="#B0866D"/>
        <Categories logo={officeLogo} title="Office" total={'20'} spent={'0'} color="#DD7298"/>
        <Categories logo={petsLogo} title="Office" total={'100'} spent={'0'} color="#783F05"/>
        <Categories logo={shoppingcartLogo} title="Shopping" total={'100'} spent={'20'} color="#386BBC"/>
        <Categories logo={subscriptionsLogo} title="Subscriptions" total={'50'} spent={'35'} color="#4F7F88"/>
        <Categories logo={TransportationLogo} title="Transportation" total={'100'} spent={'30'} color="#FFB900"/>
        <Categories logo={TravelLogo} title="Travel" total={'100'} spent={'0'} color="#8E7CC3"/>
      </div>
    </>
  );
}
