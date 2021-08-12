import React, {useState} from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Article from './Components/Article';
import Left from './Components/Left';
import Right from './Components/Right';
import './Components/styles.css';

const superagent = require('superagent');

function update(section, value) {
  return new Promise((resolve, reject) => {
    var url = `/update/${section}/${value}`;
    superagent
      .get(url)
      .end(function(err, res){
        err ? reject (null) : resolve(res.body);
      });
  });
}

function read() {
  return new Promise((resolve, reject) => {
    var url = '/data';
    superagent
      .get(url)
      .end(function(err, res){
        err ? reject(null) : resolve(res.body);
      });
  });
}
function App() {

  const [data, setData] = useState({header:0, left:0, article:0, right:0, footer:0});
  
  React.useEffect(() => {
    //read db data and update UI
    const response = read()
      .then(res => {
          setData(res)
      });
  }, []);

  const handle = (section) => {
    // update db and local state
    const response = update(section.name, section.value)
      .then(res => {
        setData(res)
      });
  }

  return (
        <div className="grid">
          <Header handle={handle} data={data}/>
          <Left handle={handle} data={data}/>
          <Article handle={handle} data={data}/>
          <Right handle={handle} data={data}/>
          <Footer handle={handle} data={data}/>
        </div>
  );
}

export default App;
