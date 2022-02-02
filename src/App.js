import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing/Landing';
import Search from './pages/Search/Search';
import Community from './pages/Community/Community';
import WritingForm from './pages/Community/WritingForm';
import CommunityDetail from './pages/Community/Detail';
import './App.less';



const App = () => {
  return (
    <BrowserRouter basename="pages">
      <Navbar />
      <Route path="/" exact component={Landing} />
      <Route path="/search" exact component={Search} />
      <Route path="/community" exact component={Community} />
      <Route path="/new" exact component={WritingForm} />
      <Route path="/update/:id" exact component={WritingForm} />
      <Route path="/community/detail/:id" component={CommunityDetail} />
    </BrowserRouter>
  );
};

export default App;