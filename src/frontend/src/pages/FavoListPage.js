import React from 'react';
// import ListWrapper from '../components/list/ListWrapper';
// import FavoList from '../components/list/FavoList';
import FavoCard from '../components/board/FavoCard';

const FavoListPage = () => {
    return (
        <div>
            {/* FavoListPage */}
            {/* <ListWrapper >
                <FavoList />
            </ListWrapper> */}
            <FavoCard />
            <FavoCard />
            <FavoCard />
        </div>
    )
}
export default FavoListPage;