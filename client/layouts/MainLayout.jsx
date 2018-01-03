import React from 'react';
import AcountsUI from "../components/accounts/AcountsUI";

export const MainLayout = ({content})=>{
  return(
    <div className="main-layout">
      <header>
        <h2>Title</h2>
        <nav>
          <a href="/">List</a>
          <a href="/about">About</a>
          <AcountsUI/>
        </nav>
      </header>
      <main>
        {content}
      </main>
    </div>
  );
}