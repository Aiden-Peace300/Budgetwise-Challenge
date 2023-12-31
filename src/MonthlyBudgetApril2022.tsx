import './MonthlyBudgetApril2022.css'
import caretPointingDownwards from './images/caret pointing downwards.png';

// importing react icons
import { GoTriangleDown } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import { TbDotsVertical } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

// importing logos
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
import utilitiesLogo from "./images/categorieLogos/utilitiesLogo.png";

// importing Category
import Category from "./Category.tsx";

/************************************************************************
 * MonthlyBudgetApril2022.tsx:
 * 
 * The MonthlyBudgetApril2022 component is responsible for presenting the 
 * detailed monthly budget for April 2022 within the Budgetwise web 
 * application. It plays a crucial role in enhancing the user experience by
 * providing insights into their spending activities.
 * 
 * This component utilizes the 'Category' module to simplify the task of 
 * adding categories to the user's comprehensive monthly budget for 
 * April 2022, promoting efficient and organized budget management.
 ************************************************************************/
export default function MonthlyBudgetApril2022() {
  return (
    <>
      <div className='budget_dropdown_main_container'>
        <div className='budget_dropdown_title'>
          <div className="budgetDropdown_container">
              <h1>Monthly Budget</h1>
              <img className="second_caret_icon" src={caretPointingDownwards} alt="caret icon" />
          </div>
            <button className="month_dropdown_menu">
              <p className="selected_month">April 2022</p>
              <GoTriangleDown className="dropdown_icon" />
            </button>
        </div>
        <div className="sharing_options_container">
          <CiShare2 className="share_icon" />
          <TbDotsVertical className="share_icon" />
          <FaPlus className="icon_color" />
        </div>
      </div>
      <div className='categories'>
        <p className="categories_font">
          Categories
        </p>
        <Category logo={educationLogo} title="Education" total={'100'} spent={'40'} color="#41AEB7"/>
        <Category logo={entertainmentLogo} title="Entertainment" total={'50'} spent={'10'} color="#FF8301"/>
        <Category logo={FoodLogo} title="Food" total={'150'} spent={'68'} color="#213B80"/>
        <Category logo={groceriesLogo} title="Groceries" total={'200'} spent={'100'} color="#00BC38"/>
        <Category logo={healthcareLogo} title="Healthcare" total={'100'} spent={'100'} color="#AF3F9D"/>
        <Category logo={housingLogo} title="Housing" total={'1,750'} spent={'1,750'} color="#FF373C"/>
        <Category logo={miscellaneousLogo} title="Miscellaneous" total={'50'} spent={'0'} color="#B0866D"/>
        <Category logo={officeLogo} title="Office" total={'20'} spent={'0'} color="#DD7298"/>
        <Category logo={petsLogo} title="Office" total={'100'} spent={'0'} color="#783F05"/>
        <Category logo={shoppingcartLogo} title="Shopping" total={'100'} spent={'20'} color="#386BBC"/>
        <Category logo={subscriptionsLogo} title="Subscriptions" total={'50'} spent={'35'} color="#4F7F88"/>
        <Category logo={TransportationLogo} title="Transportation" total={'100'} spent={'30'} color="#FFB900"/>
        <Category logo={TravelLogo} title="Travel" total={'100'} spent={'0'} color="#8E7CC3"/>
        <Category logo={utilitiesLogo} title="Utilities" total={'300'} spent={'160'} color="#009EDF"/>
      </div>
    </>
  );
}
