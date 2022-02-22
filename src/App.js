import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import'./css/reset.css'
import {Home} from "./Home";
import EditRecord from './EditReacord';
import {RecordBuilder} from "./AddRecord";
import SearchForMovie from './SearchMovie'; 


export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/RecordBuilder" element={<RecordBuilder />} />
                    <Route path="/SearchForMovie" element={<SearchForMovie />} />
                    <Route path="/EditRecord" element={<EditRecord />} />
                </Routes>
            </Router>
        </div>
    );
}