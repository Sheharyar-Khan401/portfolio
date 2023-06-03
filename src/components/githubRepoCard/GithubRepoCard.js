import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import { useState } from "react";

export default function GithubRepoCard({ repo, theme }) {

  const [isOpen, setIsOpen] = useState(false);

  function openRepoinNewTab(url) {
    if (url) {
      var win = window.open(url, "_blank");
      win.focus();
    } else {
      setIsOpen(true)
    }
  }


  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} onClick={() => openRepoinNewTab(repo.url)}>
          <div className="repo-name-div">
            {repo.logo == null ?
              "" :
              <img src={require(`../../assests/images/${repo.logo}`)} />
            }
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            {/* <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Created on {repo.createdAt.split("T")[0]}
            </p> */}
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>


          <Modal
            onClose={()=>setIsOpen(false)}
            isOpen={isOpen}
            closeable
            autoFocus
            animate
          >
            <ModalHeader>{repo.name}</ModalHeader>
            <ModalBody style={{ textAlign: 'center' }}>
              {repo.description}
            </ModalBody>
            {/* <ModalFooter>
              <ModalButton onClick={() => setIsOpen(!true)}>
                Okay
              </ModalButton>
            </ModalFooter> */}

          </Modal>
          {/* <div className="repo-stats">
          <div className="repo-left-stat">
            <span>
              <div className="language-color" style={{ backgroundColor: repo.node.primaryLanguage.color }}></div>
              <p>{repo.node.primaryLanguage.name}</p>
            </span>
            <span>
              <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 10 16" width="10" fill="rgb(106, 115, 125)" className="repo-star-svg">
                <path
                  fill-rule="evenodd"
                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                ></path>
              </svg>
              <p>{repo.node.forkCount}</p>
            </span>
            <span>
              <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 14 16" width="14" fill="rgb(106, 115, 125)" className="repo-star-svg">
                <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
              </svg>
              <p>{repo.node.stargazers.totalCount}</p>
            </span>
          </div>
          <div className="repo-right-stat">
            <p>{repo.node.diskUsage} KB</p>
          </div>
        </div> */}
        </div>
      </Fade>
    </div>
  );
}
