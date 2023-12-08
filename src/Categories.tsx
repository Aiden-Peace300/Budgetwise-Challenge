import React from 'react';
import './Categories.css';

interface CategoriesProps {
  logo: any
  title: string;
  total: number;
  spent: number;
  color: string;
}

const Categories: React.FC<CategoriesProps> = ({ logo, title, total, spent, color }) => {
  const progress = (spent / total) * 100;

  return (
    <div>
      <p className="font margin_bottom" style={{ marginBottom: '2rem' }}>
        Categories
      </p>
      <div>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '1rem'}}>
            <img style={{borderRadius: '50%', backgroundColor: color, padding: '.3rem', maxWidth: '3rem'}} src={logo} />
          </div>
          <div>
            <p className="font">{title}</p>
            <div>
              <p className='font gray' style={{ display: 'inline' }}>{'spent $'}</p>
              <p className='font green' style={{ display: 'inline' }}>{`${spent} `}</p>
              <p className='font gray' style={{ display: 'inline' }}>{' of $' + total}</p>
            </div>
          </div>
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
