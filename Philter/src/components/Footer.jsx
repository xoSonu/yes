import React from 'react';
import {CDBBox, CDBFooter } from 'cdbreact';

function Footer() {
  return (
    <CDBFooter className='footer'>
        <CDBBox display="flex" justifyContent='center' >
            <small>&copy; PHILTER, 2022-23. All rights are reserved.</small>
        </CDBBox>
    </CDBFooter>
  )
}

export default Footer