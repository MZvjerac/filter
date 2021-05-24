import React, {useState, useEffect} from "react";
import ExternalInfo from '../../components/ExternalInfo/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFileDownloader from "../../hooks/useFileDownloader";
import classes from './FileDownloader.module.css';
import Card from 'react-bootstrap/Card';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ButtonBordered from '../../components/UI/ButtonBordered/ButtonBordered';
import * as XLSX from 'xlsx';
import epoly from '../../Epoly/Epoly.xlsx';

const FileDownloader = () => {


  const [downloadFile, downloaderComponentUI] = useFileDownloader();  
  /* const[file, setFile]=useState({});

  useEffect(()=>{        
        fetch("Epoly.xlsx").then(res => res.arrayBuffer()).then(ab => {
            const wb = XLSX.read(ab, { type: "array" });               
                    
            const wsname = wb.SheetNames[0];
        
            const ws = wb.Sheets[wsname];
        
            const items = XLSX.utils.sheet_to_json(ws);
            console.log("Items=",items);
            setFile(items);
        });                         
    }, []); */

    const download = (file) => downloadFile(file);

    const files = [
      {
        name: "Epoly.xlsx",    
        file: 
          // file +
          //"https://epoly-18e5d-default-rtdb.firebaseio.com/0.json" +
          //"Epoly.xlsx"+
          //"https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=427&q=80 427w"+
          Math.random(),
        filename: "Epoly.xlsx",
      }
    ]; 
    

  return (
    <>
      
      <ExternalInfo page="fileDownloader" /> 

      <div className="row">
        <div className="col text-center">
          
          <div className="row mt-3">
            {files.map((file, idx) => (
              <div className="col" key={idx}>
                <Card className={classes.card}>
                  <Card.Body className="card-body" key={idx}>
                    <img className="card-img-top mb-3" src={file.thumb} />
                    <h5 className="card-title">{file.name}</h5>
                    <Card.Text>
                        Click on the button below to get a complete list of all part numbers including parent part numbers, ATA-Chapters, eligibility, parts nomenclature and repair descriptions.
                    </Card.Text>
                    <ButtonBordered
                      btnType="Success"
                      //clicked={() => download(file)}                      
                    >
                      {/* <a href={epoly} download="Epoly">Download</a> */}
                      <a href={epoly} download="Epoly.xlsx">Download</a>
                      <FontAwesomeIcon icon={faDownload} />
                    </ButtonBordered>
                  </Card.Body>
                </Card>
              </div>
            ))}
            
          </div>
        </div>
        {downloaderComponentUI}
      </div>
    </>
  );
};

export default FileDownloader;