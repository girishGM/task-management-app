import React from 'react';
import { useHistory } from 'react-router-dom';
import taskStore from '../../store/task-store';
import toastStore from '../../store/toast-store';
import './header.style.css';
import iconImg from '../../asset/images/icon.png';


export const Header = props => {
  const router = useHistory();
  const logout = () =>{
    localStorage.clear();
    toastStore.clearData();
    taskStore.clearData();
    router.push('/');
  } 
  return <div className='header'>
    <div className='container'>
      <div className='row'>
        <div className='col-6 text-left'><img alt ='icon' src={iconImg}/> {localStorage.getItem('user-name')}</div>
        <div className='col-6 text-right' style={{cursor:'pointer'}} onClick={logout}>Logout</div>
      </div>
    </div>
  </div>
  };