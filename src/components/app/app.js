import React from 'react';
import AppHeader from '../app-header'
import SearchPannel from '../search-panel'
import PostStatusFilter from '../post-status-filter/'
import PostList from '../post-list/';
import PostAddForm from '../post-add-form';
import './app.css';
const App =() =>{

  const data = [
    {label:'Going to learn React', impotant: true},
    {label:'That is good', impotant: false},
    {label:'i need a break', impotant: false}
  ];
    
  return (
      <div className='app'>
            <AppHeader></AppHeader>
            <div className='search-panel d-flex'>
                <SearchPannel></SearchPannel>
                <PostStatusFilter></PostStatusFilter>
             </div>
             <PostList posts={data}></PostList>
             <PostAddForm></PostAddForm>
      </div>
        
        
    )
}

export default App;