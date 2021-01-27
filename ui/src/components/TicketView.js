import React, { useState, useEffect } from 'react';
import Header from './Header';
import * as api from '../../../api'

import { useDispatch, useSelector } from 'react-redux'

const TicketView = ({value: ticket}) => {

    return (
        <div>
            <Header />
            <span>{ticket.title}</span>
            <span>{ticket.price}</span>
        </div>
    )

}

export default TicketView;