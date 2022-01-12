
import React from 'react';
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom"
import Formheader from './Formheader';
import Header from "./Header"
import Mainbody from './Mainbody';
import SubmitForm from './QuestionPaper';
import Question_form from './Question_form';
import CenteredTabs from './Tabs';
import Templates from './Templates';
import User_form from './user_form';




function App() {
  return (
    <div className="app">
         <Router>
           <Switch>npm start
                   
           <Route path="/form/:id">
                 <Formheader />
                 {/* <Question_form /> */}
                 <CenteredTabs />
              </Route>

              <Route path="/response">
                 <User_form />
              </Route>

              <Route path="/submitted">
                 <SubmitForm />
              </Route>

              
              
              <Route path="/">
                <Header />
                <Templates />
                <Mainbody />
              </Route>
        
           </Switch>
         </Router>

    </div>
  );
}

export default App;
