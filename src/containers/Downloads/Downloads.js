import React, {useState, useEffect} from 'react';
import classes from './Downloads.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

const Downloads = ({ files = [], remove }) => {
  return (
    <div className={classes.downloader}>
      <div className={classes.card}>
        <div className={classes.card_header}>File Downloader</div>
        <ul className="list-group list-group-flush">
          {files.map((file, idx) => (
            <DownloadItem
              key={idx}
              removeFile={() => remove(file.downloadId)}
              {...file}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const DownloadItem = ({ name, file, filename, removeFile }) => {
  const [downloadInfo, setDownloadInfo] = useState({
    progress: 0,
    completed: false,
    total: 0,
    loaded: 0,
  });

  useEffect(() => {
    const options = {
      onDownloadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;

        setDownloadInfo({
          progress: Math.floor((loaded * 100) / total),
          loaded,
          total,
          completed: false,
        });
      },
    };

    Axios.get(file, {
      responseType: "blob",
      ...options,
    }).then(function (response) {
      console.log(response);

      const url = window.URL.createObjectURL(
        new Blob([response.data], {
          type: response.headers["content-type"],
        })
      );

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();

      setDownloadInfo((info) => ({
        ...info,
        completed: true,
      }));

      setTimeout(() => {
        removeFile();
      }, 4000);
    });
  }, []);

  const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-12 d-flex">
          <div className="d-inline font-weight-bold text-truncate">{name}</div>
          <div className="d-inline ml-2">
            <small>
              {downloadInfo.loaded > 0 && (
                <>
                  <span className="text-success">
                    {formatBytes(downloadInfo.loaded)}
                  </span>
                  / {formatBytes(downloadInfo.total)}
                </>
              )}

              {downloadInfo.loaded === 0 && <>Initializing...</>}
            </small>
          </div>
          <div className="d-inline ml-2 ml-auto">
            {downloadInfo.completed && (
              <span className="text-success">
                Completed <FontAwesomeIcon icon="check-circle" />
              </span>
            )}
          </div>
        </div>
        <div className="col-12 mt-2">
          <ProgressBar
            variant="success"
            now={downloadInfo.progress}
            striped={true}
            label={`${downloadInfo.progress}%`}
          />
        </div>
      </div>
    </li>
  );
};

export default Downloads;

