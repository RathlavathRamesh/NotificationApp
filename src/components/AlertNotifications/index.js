// Write your code here
import './index.css'
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {
  GrFormClose,
  RiErrorWarningFill,
  MdWarning,
  MdInfo,
} from 'react-icons/all'
import Notificaton from '../Notification'

class AlertNotifications extends Component {
  render() {
    return (
      <>
        <h1 className="heading">Alert Notifications</h1>
        <div className="notificationContainer">
          <Notificaton>
            <div className="Notification">
              <div>
                <div className="Discription">
                  <AiFillCheckCircle className="success-icon" />
                  <h1 className="para">Success</h1>
                </div>
                <p className="discrip">
                  You Can Access ALl the Files In the folder
                </p>
              </div>
              <div className="cancel">
                <GrFormClose className="cancel-icon" />
              </div>
            </div>
          </Notificaton>
          <Notificaton>
            <div className="Notification">
              <div>
                <div className="Discription">
                  <RiErrorWarningFill className="Error-icon" />
                  <h1 className="Error-para">Error</h1>
                </div>
                <p className="discrip">
                  Sorry,You Are Not authorized to have access to delete the File
                </p>
              </div>
              <div className="cancel">
                <GrFormClose className="cancel-icon" />
              </div>
            </div>
          </Notificaton>
          <Notificaton>
            <div className="Notification">
              <div>
                <div className="Discription">
                  <MdWarning className="Warning-icon" />
                  <h1 className="warning-para">Warning</h1>
                </div>
                <p className="discrip">
                  Viewers of this file can see commands and suggestions
                </p>
              </div>
              <div className="cancel">
                <GrFormClose className="cancel-icon" />
              </div>
            </div>
          </Notificaton>
          <Notificaton>
            <div className="Notification">
              <div>
                <div className="Discription">
                  <MdInfo className="info-icon" />
                  <h1 className="info-para">Info</h1>
                </div>
                <p className="discrip">
                  Anyone on the internet can view these files
                </p>
              </div>
              <div className="cancel">
                <GrFormClose className="cancel-icon" />
              </div>
            </div>
          </Notificaton>
        </div>
      </>
    )
  }
}
export default AlertNotifications
