import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function UserEdit(props) {
    const {id} = useParams();
    const [user,setUser] = useState({});

    return (
        <div>
            UserEdit
        </div>
    );
}

export default UserEdit;