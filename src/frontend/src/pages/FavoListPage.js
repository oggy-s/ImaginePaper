import React from 'react';
import ListWrapper from '../components/list/ListWrapper';
import FavoList from '../components/list/FavoList';

const FavoListPage = () => {
    return (
        <div>
            {/* FavoListPage */}
            <ListWrapper >
                {/* 즐겨찾기 리스트 */}
                <FavoList />
            </ListWrapper>
        </div>
    )
}
export default FavoListPage;