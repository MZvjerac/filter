import React, {useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './FileDownloader.module.css';
import Card from 'react-bootstrap/Card';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import epoly from '../../assets/Epoly.xlsx';

const FileDownloader = () => {        

  return (     
          <Card className={classes.card}>
            <Card.Body className="card-body" >                   
              <Card.Text>
                Click on the link below to get a complete list of all part numbers including parent part numbers, ATA-Chapters, eligibility, parts nomenclature and repair descriptions.
              </Card.Text>
              <a href={epoly} download><FontAwesomeIcon icon={faDownload}/> Download </a>
              </Card.Body>
          </Card>     
  ); 
};

export default FileDownloader;