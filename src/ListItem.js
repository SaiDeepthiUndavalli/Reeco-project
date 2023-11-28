// SearchCard.jsx

import React from 'react';
import './ListItem.css';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = () => {
    
        const [isPopupVisible, setPopupVisibility] = useState(false);
      
        const togglePopup = () => {
          setPopupVisibility(!isPopupVisible);
        };
  return (
    <>
    <div className="search-card">
          <div className="search-section">
            
              <input type="text" className="search-bar" placeholder="Search..." />
              
              
              <div className='button'>
              <button className="add-item-button">Add Item</button>
             </div>
          </div>
         
      
      
      <div className='listContainer'>
              <table className="custom-table">
                  <thead>
                      <tr className='items'>
                        
                          <th className='items'>Product Name</th>
                          <th className='items'>Brand</th>
                          <th className='items'>Price</th>
                          <th className='items'>Quantity</th>
                          <th className='items'>Total</th>
                          <th className='items'>Status</th>
                          <th className='items'></th>
                          <th className='items'></th>
                      </tr>
                      <hr className="line"/>
                  </thead>
                  <tbody>
                      <tr className='items' onClick={togglePopup}>
                        <td  className='items' >
                        <img src='https://qph.cf2.quoracdn.net/main-qimg-e1c5d5b79a2fe2b8065678a7b300e362-lq' alt='img' className='img'/>
                          
                          Chicken Breat Fillets, Boneless matuu <br/> maMarinated 6 Ounce Raw, Invivid </td>
                          <td className='items'>Hormonal Black <br/> Labelmany</td>
                          <td className='items'>$60.67/6+1LB</td>
                          <td className='items'><span className='num'>0 </span>x 6 * 1LB</td>
                          <td className='items'>0</td>
                          <td className='items'></td>
                          <td className='items'>✅</td>
                          <td className='items'>❌</td>
                          <td className='items'>Edit</td>
                          {isPopupVisible && (
        <div className="popup">
          <h1 className='missing-product'>Missing Product?</h1>
          <p>Is 'Chicken Breat Fillets, Boneless...' urgent</p>
          <div className='missing-button'>
          <button className='popup-button' onClick={togglePopup}>No</button>
          <button className='popup-button' onClick={togglePopup}>Yes</button>
        </div>
        </div>
      )}
                        
                      </tr>
                      <hr className="line"/>
                      <tr className='items' onClick={togglePopup}>
                          
                          <td className='items' >
                          <img src='https://qph.cf2.quoracdn.net/main-qimg-e1c5d5b79a2fe2b8065678a7b300e362-lq' alt='img' className='img'/>
                          Chicken Breat Fillets, Boneless matuu <br/> maMarinated 6 Ounce Raw, Invivid </td>
                          <td className='items'>Hormonal Black <br/> Labelmany</td>
                          <td className='items'>$60.67/6+1LB</td>
                          <td className='items'><span className='num'>15 </span> x 6 * 1LB</td>
                          <td className='items'>$9000.88</td>
                          <td className='items'></td>
                          <td className='items'>✅</td>
                          <td className='items'>❌</td>
                          <td className='items'>Edit</td>
                          {isPopupVisible && (
        <div className="popup">
          <h1 className='missing-product'>Missing Product?</h1>
          <p>Is 'Chicken Breat Fillets, Boneless...' urgent</p>
          <div className='missing-button'>
          <button className='popup-button' onClick={togglePopup}>No</button>
          <button className='popup-button' onClick={togglePopup}>Yes</button>
        </div>
        </div>
      )}
                          
                      </tr>
                      <hr className="line"/>
                      <tr className='items' onClick={togglePopup}>
                          
                          <td className='items' >
                          <img src='https://qph.cf2.quoracdn.net/main-qimg-e1c5d5b79a2fe2b8065678a7b300e362-lq' alt='img' className='img'/>
                          Chicken Breat Fillets, Boneless matuu <br/> maMarinated 6 Ounce Raw, Invivid </td>
                          <td className='items'>Hormonal Black <br/> Labelmany</td>
                          <td className='items'>$60.67/6+1LB </td>
                          <td className='items'><span className='num'>15 </span> x 6 * 1LB</td>
                          <td className='items'>$9000.88</td>
                          <td className='items'></td>
                          <td className='items'>✅</td>
                          <td className='items'>❌</td>
                          <td className='items'>Edit</td>
                          {isPopupVisible && (
        <div className="popup">
          <h1 className='missing-product'>Missing Product?</h1>
          <p>Is 'Chicken Breat Fillets, Boneless...' urgent</p>
          <div className='missing-button'>
          <button className='popup-button' onClick={togglePopup}>No</button>
          <button className='popup-button' onClick={togglePopup}>Yes</button>
        </div></div>
      )}
                          
                      </tr>
                      <hr className="line"/>
                      <tr className='items' onClick={togglePopup}>
                          
                          <td className='items' >
                          <img src='https://qph.cf2.quoracdn.net/main-qimg-e1c5d5b79a2fe2b8065678a7b300e362-lq' alt='img' className='img'/>
                          
                        Chicken Breat Fillets, Boneless matuu <br/> maMarinated 6 Ounce Raw, Invivid </td>
                          <td className='items'>Hormonal Black <br/> Labelmany</td>
                          <td className='items'>$60.67/6+1LB</td>
                          <td className='items'><span className='num'>0 </span> x 6 * 1LB</td>
                          <td className='items'>0</td>
                          <td className='items'></td>
                          <td className='items'>✅</td>
                          <td className='items'>❌</td>
                          <td className='items'>Edit</td>
                          {isPopupVisible && (
        <div className="popup">
          <h1 className='missing-product'>Missing Product</h1>
          <p>Is 'Chicken Breat Fillets, Boneless...' urgent?</p>
          <div className='missing-button'>
          <button className='popup-button' onClick={togglePopup}>No</button>
          <button className='popup-button' onClick={togglePopup}>Yes</button>
        </div></div>
      )}
                          
                      </tr>
                      <hr className="line"/>
                      <tr className='items' onClick={togglePopup}>
                          
                          <td className='items' >
                          <img src='https://qph.cf2.quoracdn.net/main-qimg-e1c5d5b79a2fe2b8065678a7b300e362-lq' alt='img' className='img'/>
                          Chicken Breat Fillets, Boneless matuu <br/> maMarinated 6 Ounce Raw, Invivid </td>
                          <td className='items'>Hormonal Black <br/> Labelmany</td>
                          <td className='items'>$60.67/6+1LB <span className='under-line'>$10.43 </span></td>
                          <td className='items'><span className='num'>13 </span>x 6 * 1LB</td>
                          <td className='items'>$12,654.32 <span className='under-line'>$3,345.12</span></td>
                          <td className='items'></td>
                          <td className='items'>✅</td>
                          <td className='items'>❌</td>
                          <td className='items'>Edit</td>
                          {isPopupVisible && (
        <div className="popup">
          <h1 className='missing-product'>Missing Product</h1>
          <p>Is 'Chicken Breat Fillets, Boneless...' urgent?</p>
          <div className='missing-button'>
          <button className='popup-button' onClick={togglePopup}>No</button>
          <button className='popup-button' onClick={togglePopup}>Yes</button>
        </div></div>
      )}
                          
                      </tr>
                     
                  </tbody>
              </table>
          </div>
          </div>
          </>
  );
};

export default ListItem;
