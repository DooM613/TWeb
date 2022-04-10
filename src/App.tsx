import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'


import {FormLayout} from "./Layouts/FormLayout";
import {HeaderLayout} from "./Layouts/HeaderLayout";
import Mycontent from "./Layouts/Mycontent";
import {Footer} from "antd/es/layout/layout";
import {Layout} from "antd";
function App() {
  return (
      <Layout>
        <>
          <HeaderLayout/>
        </>
        <div style={{ padding: '100px 50px 50px 50px'
        }}>
          <Mycontent />
        </div>
          <h1 style={{textAlign:'center'}}>Forma mea</h1>
          <FormLayout/>
        <Footer style={{ textAlign: 'center' }}>Railean Pavel</Footer>

      </Layout>
  );
}

export default App;
